#!/usr/bin/env bash
set -euo pipefail

force=0
if [[ "${1:-}" == "--force" ]]; then
  force=1
elif [[ $# -gt 0 ]]; then
  echo "Usage: ./generate_audio.sh [--force]" >&2
  exit 1
fi

if ! say -v "Sinji" " " >/dev/null 2>&1; then
  echo "The macOS voice 'Sinji' is not available on this machine." >&2
  exit 1
fi

if ! command -v afconvert >/dev/null 2>&1; then
  echo "afconvert is required to create M4A files." >&2
  exit 1
fi

mkdir -p assets/audio
manifest="$(mktemp)"
cleanup_files=("$manifest")

cleanup() {
  for file in "${cleanup_files[@]}"; do
    if [[ -e "$file" ]]; then
      rm -f "$file"
    fi
  done
}
trap cleanup EXIT

node <<'NODE' > "$manifest"
const fs = require("fs");
const vm = require("vm");

globalThis.window = globalThis;
vm.runInThisContext(fs.readFileSync("questions.js", "utf8"), { filename: "questions.js" });

for (const question of window.CHINESE_QUESTIONS) {
  const rows = [
    [`${question.id}_question`, question.audio.question, question.questionSpoken],
    ...question.options.map((_, index) => [
      `${question.id}_opt${index + 1}`,
      question.audio.options[index],
      question.optionSpoken[index]
    ]),
    [`${question.id}_correct`, question.audio.correct, question.correctSpoken],
    [`${question.id}_wrong`, question.audio.wrong, question.wrongSpoken]
  ];

  for (const row of rows) {
    console.log(row.join("\t"));
  }
}
NODE

while IFS=$'\t' read -r label output text; do
  [[ -z "$label" || -z "$output" || -z "$text" ]] && continue

  if [[ -f "$output" && "$force" -eq 0 ]]; then
    echo "Skipping $label"
    continue
  fi

  mkdir -p "$(dirname "$output")"
  tmp_aiff="$(mktemp "${TMPDIR:-/tmp}/${label}.XXXXXX.aiff")"
  cleanup_files+=("$tmp_aiff")

  echo "Generating $label: $text"
  say -v "Sinji" -o "$tmp_aiff" "$text"
  afconvert "$tmp_aiff" "$output" -f m4af -d aac
  rm -f "$tmp_aiff"
done < "$manifest"

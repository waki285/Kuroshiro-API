# Kuroshiro-API

A simple API for [Kuroshiro](https://npmjs.com/package/kuroshiro) library.

## Usage

Send `POST` request to `/`. The body should be a JSON object (`Content-Type: application/json`) with the following properties:

- `text`: The text to be converted. (Required)
- `type`: The conversion type. (Required) You can choose `hiragana`, `katakana`, or `romaji`.
- `mode`: The conversion mode. (Optional) You can choose `normal`, `spaced`, or `okurigana`.
- `romajiSystem` The romaji system. Only works when type is `romaji`. (Optional) You can choose `hepburn`, `nippon`, or `passport`.

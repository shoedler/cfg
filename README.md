<marquee><h1>cfg</h1></marquee>

My tooling configurations

## vscode

### Themes

[**August - In Bed by 7pm (Darker)**](https://marketplace.visualstudio.com/items?itemName=inci-august.august-themes) by inci-august. Requires some colors to be adjusted/added in the settings for better readability. The diff editor is pretty much unusable without these changes:

```json
    "diffEditor.insertedTextBackground": "#53634620", -> "#a0e46167"
    "diffEditor.removedTextBackground": "#ff9cac20", -> "#ff4c6a93"
    + "diffEditor.insertedLineBackground": "#a0e46123",
    + "diffEditor.removedLineBackground": "#ff9cad2f",
    ...
    "editorError.foreground": "#f0717870", -> "#f33a59"
    "editorWarning.foreground": "#ffcb6b70", -> "#ffcb6b",
    ...
    + "notificationsWarningIcon.foreground": "#ffcb6b",
    + "problemsWarningIcon.foreground": "#ffcb6b",
```

> Check the _vscode_ directory for a modified version of the theme with these changes.

## fonts

Sorted by current lovedness.

### FantasqueSansM NF

- **test drive**: https://www.programmingfonts.org/#fantasque-sans
- **download**: https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/FantasqueSansMono.zip

### Agave NF

- **test drive**: https://www.programmingfonts.org/#agave
- **download**: https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Agave.zip

### CaskaydiaCove NF

- **test drive**: https://www.programmingfonts.org/#cascadia-code
- **download**: https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/CascadiaCode.zip

## legacy-loved fonts

### FiraCode NF

- **test drive**: https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/FiraCode.zip
- **download**: https://www.programmingfonts.org/#firacode

### Hack NF

- **test drive**: https://www.programmingfonts.org/#hack
- **download**: https://github.com/ryanoasis/nerd-fonts/releases/download/v3.1.1/Hack.zip

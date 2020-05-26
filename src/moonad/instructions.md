## How to add a new character

### Using a script
1. The chacaracters files are named as **`Arelin.Thing.character_name_fun.fm`** on the [Moonad repository](https://github.com/moonad/Moonad) following this [template](./Arelin.Thing.template_fun.fm).
2. Create a new branch from your character branch. Ex: `git branch export-helper` or do it in your branch
3. Copy [`Moonad-exports-helper.js`](./Moonad-exports-helper.js) and [`package.json`](./package.json) and paste them on your `Moonad` local repository (where you are creating the character).
4. On Moonad:
    - run `npm i`
    - `node Moonad-export-helper.js`: this will update `Exports.Arelin.fm`.
    - `fmcjs Arelin.Exports`: this will parse the file to JS. Copy the content and paste it on [`TaelinArena.fm.js`](../TaelinArena.fm.js). This will update the file.
5. **Don't** commit `node_modules`, `package.json`, `package-lock.json` and `Moonad-exports-helper.js` on Moonad!
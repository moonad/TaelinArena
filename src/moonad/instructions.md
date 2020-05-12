## How to add a new character

### Using a script
1. The chacaracters files are named as **`TaelinArena.Thing.character_name_fun.fm`** on the [Moonad repository](https://github.com/moonad/Moonad) following this [template](./TaelinArena.Thing.template_fun.fm).
2. , create a new branch from your chacacter branch. Ex: `git branch export-helper` or do it in your branch and don
3. Copy [`Moonad-exports-helper.js`](./Moonad-exports-helper.js) and [`package.json`](./package.json) and paste them on your `Moonad` local repository (where you are creating the character).
4. On Moonad:
    - run `npm i`
    - `node Moonad-export-helper.js`: this will update `Exports.TaelinArena.fm`.
    - `fmcjs Exports.TaelinArena.fm`: this will parse the file to JS. Copy the content and paste it on [`TaelinArena.fm.js`](../TaelinArena.fm.js). This will update the file.
5. **Don't** commit `node_modules`, `package.json`, `package-lock.json` and `Moonad-exports-helper.js` on Moonad!
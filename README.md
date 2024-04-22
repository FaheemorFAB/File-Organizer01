# File Organizer Script

This Node.js script automates the organization of files within a specified directory by grouping them into subdirectories based on their file extensions.

## How It Works

1. **Define Folder Path**: Utilizes `path.join(__dirname, "Organise Files")` to set the target folder path.
2. **Check Folder Existence**: Employs `fs.access()` to verify the existence of the folder. If it doesn't exist, `fs.mkdir()` is invoked to create it.
3. **Read Files**: Calls `fs.readdir()` to read the contents of the folder.
4. **Extract File Extension**: Uses `path.extname(file).slice(1)` to obtain the file extension from each file.
5. **Create and Move Files**: If an extension is present, the script creates a new directory named after the extension (in uppercase) using `fs.mkdir()`, and moves the file into this directory with `fs.rename()`.

## Benefits

- **Automated Organization**: Files are automatically sorted into extension-based folders, making it easier to manage and locate files.
- **Time-Saving**: Reduces the manual effort required to organize a large number of files.
- **Customizable**: The script can be modified to suit different organizational preferences or directory structures.

## Usage

To use this script, simply run it in a Node.js environment. Ensure that you have Node.js installed on your system and that the script has the necessary permissions to read from and write to the file system.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or open an issue.

## Support

If you encounter any problems or have any questions, please open an issue for support.


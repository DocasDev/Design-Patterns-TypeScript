import { ImageEditor } from './classes/ImageEditor';
import { ImageEditorBackupManager } from './classes/ImageEditorBackupManager';

const imageEditor = new ImageEditor('/media/image.png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormat('jpg');

backupManager.backup();
imageEditor.convertFormat('bmp');

backupManager.backup();
imageEditor.convertFormat('webp');

console.log(imageEditor); //webp

backupManager.undo();
console.log(imageEditor); //bmp

backupManager.undo();
console.log(imageEditor); //jpg

backupManager.undo();
console.log(imageEditor); //png

backupManager.undo(); //Backup not found

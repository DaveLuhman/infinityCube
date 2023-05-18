import { default as fs } from "node:fs";

try {
  const files = await fs.readdir("../oxfordWordLists/");
  for (const file of files) {
    console.log(file);
  }
} catch (err) {
  console.error(err);
}

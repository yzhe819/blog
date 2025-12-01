import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type ThoughtMetadata = {
  content: string;
  createdAt: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

async function getThought(file: string) {
  const filePath = path.join("thoughts", file);
  let source = fs.readFileSync(filePath, "utf-8");
  const { data: metadata } = matter(source);
  return {
    metadata,
    file,
  };
}

async function getAllThoughts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(mdxFiles.map(getThought));
}

export async function getThoughts() {
  return getAllThoughts(path.join(process.cwd(), "thoughts"));
}

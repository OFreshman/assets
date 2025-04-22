// scripts/generate-file-data.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 获取当前模块的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置目录和输出路径
const filesDir = path.resolve(__dirname, '../files');
const outJson = path.resolve(__dirname, '../public/files.json');

const siteUrl = process.env.NETLIFY_SITE_URL || 'https://ethan-oss.netlify.app';

// 读取文件
const filenames = fs.readdirSync(filesDir).sort();

// 生成链接数组
const entries = filenames.map(name => ({
  name,
  url: `${siteUrl}/files/${encodeURIComponent(name)}`
}));

// 输出 JSON 文件
fs.writeFileSync(outJson, JSON.stringify(entries, null, 2), 'utf-8');
console.log(`✅ Generated ${outJson} (${entries.length} items)`);

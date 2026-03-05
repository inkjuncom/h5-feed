import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const templatePath = path.join(rootDir, 'template.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const pages = [
  {
    output: 'index.html',
    title: '百亿补贴',
    scriptSrc: '/src/pages/home/main.tsx'
  },
  {
    output: 'views/coupon.html',
    title: '消费券',
    scriptSrc: '/src/pages/coupon/main.tsx'
  },
  {
    output: 'views/rule.html',
    title: '安心买·随心退',
    scriptSrc: '/src/pages/rule/main.tsx'
  },
  {
    output: 'views/search.html',
    title: '搜索补贴商品',
    scriptSrc: '/src/pages/search/main.tsx'
  }
];

pages.forEach(page => {
  const content = template
    .replace('{{TITLE}}', page.title)
    .replace('{{SCRIPT_SRC}}', page.scriptSrc);

  const outputPath = path.join(rootDir, page.output);
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Generated: ${outputPath}`);
});

console.log('All HTML files generated successfully!');

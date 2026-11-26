import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My boss opened our work-life balance meeting by asking who could work Saturday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

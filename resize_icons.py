from /Users/sususu/icon_original.png import Image
import os

# 定义输入路径（原始图标文件）和输出文件夹
input_image_path = "icon_original.png"  # 替换为你的原始图标文件路径
output_dir = "icons/"  # 输出文件夹
os.makedirs(output_dir, exist_ok=True)

# 定义目标尺寸和输出文件名
output_sizes = {
    "16x16": os.path.join(output_dir, "icon16.png"),
    "48x48": os.path.join(output_dir, "icon48.png"),
    "128x128": os.path.join(output_dir, "icon128.png"),
}

# 加载原始图标
original_image = Image.open(input_image_path)

# 创建指定尺寸的图标并保存
for size, output_path in output_sizes.items():
    dimensions = tuple(map(int, size.split('x')))
    resized_image = original_image.resize(dimensions, Image.ANTIALIAS)
    resized_image.save(output_path)

print("图标已成功生成！存储在：", output_dir)

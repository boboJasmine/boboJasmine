const changeImage = document.getElementById("sliderButton");
const image1 = document.getElementById("foregroundImg");
const image2 = document.getElementById("backgroundImg");

let imageNames1 = ["cate10-00001.jpg", "cate10-00002.jpg", "cate10-00065.jpg"]; 

let imageNames2 = ["cate10-00001.jpg", "cate10-00002.jpg", "cate10-00065.jpg"];  //接收圖片陣列

let currentIndex1 = 0;
let currentIndex2 = 0;
let oldIndex1 = -1;

// 圖片相對路徑
const folder1 = "./牙齒/train/images/"; 
const folder2 = "./牙齒/train/result/";

let beginingAnimation; // 先顯示的圖
const imageAnimation = document.getElementById("run");
const dotWaveAnimation = document.querySelector(".change_animation");
// const delayInMilliseconds = 3000;
const next = document.getElementById("nextButton");

imageAnimation.addEventListener("click", () => {    
    if (currentIndex1 = currentIndex2) {
        beginingAnimation = true;
    }

    if (currentIndex1 = 0) {
        const newImageName1 = imageNames1[currentIndex1];
        const newImageName2 = imageNames2[currentIndex2];
    
        const newImageUrl1 = folder1 + newImageName1;
        const newImageUrl2 = folder2 + newImageName2;
    
        image1.src = newImageUrl1;
        image1.alt = "Image " + (currentIndex1 + 1);
    
        image2.src = newImageUrl2;
        image2.alt = "Image " + (currentIndex2 + 1);
    }

    if (beginingAnimation) {
        // 切換到動畫
        // image1.style.opacity = "0"; // 圖片1逐漸透明
        // dotWaveAnimation.style.opacity = "1";

        setTimeout(function () {
            dotWaveAnimation.style.display = "flex"; // 動畫逐漸顯示
            image1.style.display = "none";
        }, 500);

        setTimeout(function () {
            dotWaveAnimation.style.display = "none"; // 隐藏元素
            image2.style.display = "flex";
        }, 3000);

        beginingAnimation = false; // 切换圖片顯示狀態
    }
});

changeImage.addEventListener("click", () => {
    dotWaveAnimation.style.display = "none";
    image2.style.display = "none";
    image1.style.display = "flex";/* 比賽時新增的 */
    image1.style.opacity = "1"; /* 比賽時新增的 */
    
    
    if ((currentIndex1 < 0)) {
        currentIndex1 = 0;
        currentIndex2 = 0;
    }
})

next.addEventListener("click", () => {
    dotWaveAnimation.style.display = "none";
    image2.style.display = "none";
    image1.style.display = "flex";/* 比賽時新增的 */
    image1.style.opacity = "1"; /* 比賽時新增的 */

    currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
    currentIndex2 = (currentIndex2 + 1) % imageNames2.length;

    const newImageName1 = imageNames1[currentIndex1];
    const newImageName2 = imageNames2[currentIndex2];

    const newImageUrl1 = folder1 + newImageName1;
    const newImageUrl2 = folder2 + newImageName2;

    image1.src = newImageUrl1;
    image1.alt = "Image " + (currentIndex1 + 1);

    image2.src = newImageUrl2;
    image2.alt = "Image " + (currentIndex2 + 1);
})


//-------------------比賽用-點擊動畫---------------------------
// let isForegroundImageVisible; // 先顯示的圖
// const imageAnimation = document.getElementById("run");
// const dotWaveAnimation = document.querySelector(".change_animation");
// // const delayInMilliseconds = 3000;
// const next = document.getElementById("nextButton");

// imageAnimation.addEventListener("click", () => {
//     if ((currentIndex1 - oldIndex1) == 1) {
//         isForegroundImageVisible = true;
//         oldIndex1 = (oldIndex1 + 1) % imageNames1.length;
//     }

//     if (isForegroundImageVisible) {
//         // 切換到動畫
//         // image1.style.opacity = "0"; // 圖片1逐漸透明
//         dotWaveAnimation.style.opacity = "1";

//         setTimeout(function () {
//             dotWaveAnimation.style.display = "flex"; // 動畫逐漸顯示
//             image1.style.display = "none";
//         }, 500);

//         setTimeout(function () {
//             dotWaveAnimation.style.display = "none"; // 隐藏元素
//             image2.style.display = "flex";
//         }, 3000);
//     }

//     isForegroundImageVisible = false; // 切换图片显示状态
// });

// changeImage.addEventListener("click", () => {
//     dotWaveAnimation.style.display = "none";
//     image2.style.display = "none";
//     image1.style.display = "flex";/* 比賽時新增的 */
//     image1.style.opacity = "1"; /* 比賽時新增的 */
    
//     if ((currentIndex1 - oldIndex1) < 1) {
//         oldIndex1 = (oldIndex1 - 2) % imageNames1.length;
//         currentIndex1 = (currentIndex1 - 1) % imageNames1.length;
//         currentIndex2 = (currentIndex2 - 1) % imageNames2.length;

//         if (oldIndex1 < -1) {
//             oldIndex1 = (oldIndex1 + 1) % imageNames1.length;  
//         }

//         if (currentIndex1 < 0) {
//             currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
//             currentIndex2 = (currentIndex2 + 1) % imageNames2.length;
//         }

//     } 
    
//     if ((currentIndex1 >= 0) && (oldIndex1 >= -1)) {
//         currentIndex1 = (currentIndex1 - 1) % imageNames1.length;
//         currentIndex2 = (currentIndex2 - 1) % imageNames2.length;
//         oldIndex1 = (oldIndex1 - 1) % imageNames1.length; 

//         if (currentIndex1 < 0) {
//             currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
//             currentIndex2 = (currentIndex2 + 1) % imageNames2.length;
//         }

//     } 
    
//     if ((currentIndex1 < 0) || (oldIndex1 < -1)) {
//         currentIndex1 = 0;
//         currentIndex2 = 0;
//         oldIndex1 = -1;
//     }

//     const newImageName1 = imageNames1[currentIndex1];
//     const newImageName2 = imageNames2[currentIndex2];

//     const newImageUrl1 = folder1 + newImageName1;
//     const newImageUrl2 = folder2 + newImageName2;

//     image1.src = newImageUrl1;
//     image1.alt = "Image " + (currentIndex1 - 1);

//     image2.src = newImageUrl2;
//     image2.alt = "Image " + (currentIndex2 - 1);
// })

// next.addEventListener("click", () => {
//     dotWaveAnimation.style.display = "none";
//     image2.style.display = "none";
//     image1.style.display = "flex";/* 比賽時新增的 */
//     image1.style.opacity = "1"; /* 比賽時新增的 */

//     if ((currentIndex1 - oldIndex1) >= 1) {
//         oldIndex1 = (oldIndex1 + 1) % imageNames1.length;
//     }

//     currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
//     currentIndex2 = (currentIndex2 + 1) % imageNames2.length;

//     const newImageName1 = imageNames1[currentIndex1];
//     const newImageName2 = imageNames2[currentIndex2];

//     const newImageUrl1 = folder1 + newImageName1;
//     const newImageUrl2 = folder2 + newImageName2;

//     image1.src = newImageUrl1;
//     image1.alt = "Image " + (currentIndex1 + 1);

//     image2.src = newImageUrl2;
//     image2.alt = "Image " + (currentIndex2 + 1);
// })

//-------------------專題用-比較圖---------------------------
// 按鈕點擊處理程序
// changeImage.addEventListener("click", () => {

//     currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
//     currentIndex2 = (currentIndex2 + 1) % imageNames2.length;
//     oldIndex1 = (oldIndex1 + 1) % imageNames1.length;

//     const newImageName1 = imageNames1[currentIndex1];
//     const newImageName2 = imageNames2[currentIndex2];

//     const newImageUrl1 = folder1 + newImageName1;
//     const newImageUrl2 = folder2 + newImageName2;

//     image1.src = newImageUrl1;
//     image1.alt = "Image " + (currentIndex1 + 1);

//     image2.src = newImageUrl2;
//     image2.alt = "Image " + (currentIndex2 + 1);
    
// })

// ---------------------file catch------------------------------
// 獲取檔案夾中的所有圖片名稱
// function loadImageNames(folderPath) {
//     return fetch(folderPath)
//         .then((response) => response.text())
//         .then((data) => {
//             return extractImageNames(data);
//         });
// }

// 從檔案夾中提取圖片名稱的函數
// function extractImageNames(folderContent) {
//     // 這裡將檔案名稱拆分開來，只保留檔案名稱結尾是.jpg或.png的檔案，並且存在一個陣列中
//     return folderContent.split("\n").filter((fileName) => fileName.endsWith(".jpg") || fileName.endsWith(".png"));
// }



// --------------------------------------------------------------------------------------------
// const image = document.getElementById("image");
// const changeImageButton = document.getElementById("changeImage");

// // 获取图像文件夹中的所有图像文件
// fetch("path_to_image_folder/") // 替换为实际的图像文件夹路径
//     .then((response) => response.text())
//     .then((data) => {
//         // 从文件夹内容中提取图像文件名
//         const imageNames = extractImageNames(data);

//         let currentIndex = 0;

//         // 按钮点击事件处理程序
//         changeImageButton.addEventListener("click", () => {
//             currentIndex = (currentIndex + 1) % imageNames.length;
//             const newImageName = imageNames[currentIndex];
//             const newImageUrl = "path_to_image_folder/" + newImageName;
//             image.src = newImageUrl;
//             image.alt = "Image " + (currentIndex + 1);
//         });
//     })
//     .catch((error) => {
//         console.error("Fetch error: " + error);
//     });

// // 从文件夹内容中提取图像文件名的函数
// function extractImageNames(folderContent) {
//     // 这里可以根据实际情况编写正则表达式或解析逻辑来提取图像文件名
//     // 以下示例简单地假设文件夹内容是包含图像文件名的文本列表，每行一个文件名
//     return folderContent.split("\n").filter((fileName) => fileName.endsWith(".jpg"));
// }

// --------------------------------------以下為動畫-------------------------------------------
const navbar = document.querySelector('.navBG');

//監看頁面滾動進度
window.addEventListener('scroll', () => {
    // 計算百分比
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 25 && scrollPercentage < 60) {
        // 滾動到25% - 50%時，更改背景顏色為藍色
        navbar.style.backgroundColor = '#20207b';
    } else if (scrollPercentage >= 60 && scrollPercentage < 90) {
        // 滾動到50% - 75%時，更改背景顏色為黑色
        navbar.style.backgroundColor = 'black';
    } else if (scrollPercentage >= 90) {
        // 滾動到75%及以上時，更改背景顏色為綠色
        navbar.style.backgroundColor = '#35924e';
    } else {
        // 恢復默認背景顏色
        navbar.style.backgroundColor = '#ffffff00';
    }
});

//------------------------------失敗---------------------------------

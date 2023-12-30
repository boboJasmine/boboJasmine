const changeImage = document.getElementById("sliderButton");
const image1 = document.getElementById("foregroundImg");
const image2 = document.getElementById("backgroundImg");

let imageNames1 = ["cate2-00001.jpg",
    "cate2-00007.jpg",
    "cate2-00008.jpg",
    "cate2-00010.jpg",
    "cate2-00011.jpg",
    "cate2-00012.jpg",
    "cate2-00013.jpg",
    "cate2-00015.jpg",
    "cate2-00016.jpg",
    "cate2-00017.jpg",
    "cate2-00018.jpg",
    "cate2-00019.jpg",
    "cate2-00020.jpg",
    "cate2-00021.jpg",
    "cate2-00024.jpg",
    "cate2-00026.jpg",
    "cate2-00027.jpg",
    "cate2-00028.jpg",
    "cate2-00029.jpg",
    "cate2-00030.jpg",
    "cate2-00031.jpg",
    "cate2-00032.jpg",
    "cate2-00033.jpg",
    "cate2-00034.jpg",
    "cate2-00036.jpg",
    "cate2-00037.jpg",
    "cate2-00038.jpg",
    "cate2-00039.jpg",
    "cate2-00040.jpg",
    "cate2-00101.jpg",
    "cate2-00105.jpg",
    "cate2-00107.jpg",
    "cate2-00108.jpg",
    "cate2-00111.jpg",
    "cate2-00112.jpg",
    "cate2-00113.jpg",
    "cate2-00114.jpg",
    "cate2-00115.jpg",
    "cate2-00116.jpg",
    "cate2-00118.jpg",
    "cate2-00120.jpg",
    "cate2-00122.jpg",
    "cate2-00123.jpg",
    "cate2-00124.jpg",
    "cate2-00126.jpg",
    "cate2-00127.jpg",
    "cate2-00128.jpg",
    "cate2-00129.jpg",
    "cate2-00130.jpg",
    "cate2-00133.jpg",
    "cate2-00134.jpg",
    "cate2-00135.jpg",
    "cate2-00136.jpg",
    "cate2-00138.jpg",
    "cate2-00139.jpg",
    "cate2-00140.jpg",
    "cate2-00142.jpg",
    "cate2-00143.jpg",
    "cate2-00145.jpg",
    "cate2-00146.jpg",
    "cate2-00147.jpg",
    "cate2-00150.jpg",
    "cate2-00151.jpg",
    "cate2-00152.jpg",
    "cate2-00153.jpg",
    "cate2-00154.jpg",
    "cate2-00157.jpg",
    "cate2-00159.jpg",
    "cate2-00160.jpg",
    "cate2-00162.jpg",
    "cate2-00163.jpg",
    "cate2-00165.jpg",
    "cate2-00167.jpg",
    "cate2-00170.jpg",
    "cate2-00171.jpg",
    "cate2-00172.jpg",
    "cate2-00173.jpg",
    "cate2-00174.jpg",
    "cate2-00175.jpg",
    "cate2-00176.jpg",
    "cate2-00177.jpg",
    "cate2-00178.jpg",
    "cate2-00179.jpg",
    "cate2-00180.jpg",
    "cate2-00182.jpg",
    "cate2-00183.jpg",
    "cate2-00185.jpg",
    "cate2-00186.jpg",
    "cate2-00187.jpg",
    "cate2-00188.jpg",
    "cate2-00189.jpg",
    "cate2-00191.jpg",
    "cate2-00192.jpg",
    "cate2-00193.jpg",
    "cate2-00194.jpg",
    "cate2-00197.jpg",
    "cate2-00198.jpg",
    "cate2-00199.jpg",
    "cate2-00200.jpg",
    "cate2-00201.jpg",
    "cate2-00202.jpg",
    "cate2-00203.jpg",
    "cate2-00204.jpg",
    "cate2-00205.jpg",
    "cate2-00206.jpg",
    "cate2-00207.jpg",
    "cate2-00209.jpg",
    "cate2-00211.jpg",
    "cate2-00212.jpg",
    "cate2-00214.jpg",
    "cate2-00215.jpg",
    "cate2-00216.jpg",
    "cate2-00217.jpg",
    "cate2-00218.jpg",
    "cate2-00219.jpg",
    "cate2-00220.jpg",
    "cate3-00003.jpg",
    "cate3-00006.jpg",
    "cate3-00007.jpg",
    "cate3-00008.jpg",
    "cate3-00009.jpg",
    "cate3-00013.jpg",
    "cate3-00014.jpg",
    "cate3-00016.jpg",
    "cate3-00018.jpg",
    "cate3-00019.jpg",
    "cate3-00020.jpg",
    "cate3-00021.jpg",
    "cate3-00023.jpg",
    "cate3-00026.jpg",
    "cate3-00027.jpg",
    "cate3-00028.jpg",
    "cate3-00029.jpg",
    "cate3-00031.jpg",
    "cate3-00032.jpg",
    "cate3-00033.jpg",
    "cate3-00034.jpg",
    "cate3-00035.jpg",
    "cate3-00036.jpg",
    "cate3-00037.jpg",
    "cate3-00039.jpg",
    "cate3-00040.jpg",
    "cate3-00041.jpg",
    "cate3-00042.jpg",
    "cate3-00043.jpg",
    "cate3-00044.jpg",
    "cate3-00045.jpg",
    "cate4-00069.jpg",
    "cate4-00070.jpg",
    "cate4-00072.jpg",
    "cate4-00073.jpg",
    "cate4-00075.jpg",
    "cate4-00077.jpg",
    "cate4-00079.jpg",
    "cate4-00082.jpg",
    "cate4-00085.jpg",
    "cate4-00086.jpg",
    "cate4-00087.jpg",
    "cate4-00088.jpg",
    "cate4-00089.jpg",
    "cate4-00091.jpg",
    "cate4-00094.jpg",
    "cate4-00095.jpg",
    "cate4-00099.jpg",
    "cate4-00100.jpg",
    "cate4-00101.jpg",
    "cate4-00102.jpg",
    "cate4-00103.jpg",
    "cate4-00104.jpg",
    "cate4-00105.jpg",
    "cate4-00106.jpg",
    "cate4-00107.jpg",
    "cate4-00108.jpg",
    "cate4-00111.jpg",
    "cate4-00112.jpg",
    "cate4-00113.jpg",
    "cate4-00114.jpg",
    "cate4-00116.jpg",
    "cate4-00117.jpg",
    "cate4-00118.jpg",
    "cate4-00119.jpg",
    "cate4-00120.jpg",
    "cate4-00121.jpg",
    "cate4-00124.jpg",
    "cate4-00127.jpg",
    "cate4-00129.jpg",
    "cate4-00130.jpg",
    "cate4-00131.jpg",
    "cate4-00133.jpg",
    "cate4-00134.jpg",
    "cate4-00135.jpg",
    "cate4-00137.jpg",
    "cate4-00139.jpg"]; 

let imageNames2 = ["cate2-00001.bmp",
    "cate2-00007.bmp",
    "cate2-00008.bmp",
    "cate2-00010.bmp",
    "cate2-00011.bmp",
    "cate2-00012.bmp",
    "cate2-00013.bmp",
    "cate2-00015.bmp",
    "cate2-00016.bmp",
    "cate2-00017.bmp",
    "cate2-00018.bmp",
    "cate2-00019.bmp",
    "cate2-00020.bmp",
    "cate2-00021.bmp",
    "cate2-00024.bmp",
    "cate2-00026.bmp",
    "cate2-00027.bmp",
    "cate2-00028.bmp",
    "cate2-00029.bmp",
    "cate2-00030.bmp",
    "cate2-00031.bmp",
    "cate2-00032.bmp",
    "cate2-00033.bmp",
    "cate2-00034.bmp",
    "cate2-00036.bmp",
    "cate2-00037.bmp",
    "cate2-00038.bmp",
    "cate2-00039.bmp",
    "cate2-00040.bmp",
    "cate2-00101.bmp",
    "cate2-00105.bmp",
    "cate2-00107.bmp",
    "cate2-00108.bmp",
    "cate2-00111.bmp",
    "cate2-00112.bmp",
    "cate2-00113.bmp",
    "cate2-00114.bmp",
    "cate2-00115.bmp",
    "cate2-00116.bmp",
    "cate2-00118.bmp",
    "cate2-00120.bmp",
    "cate2-00122.bmp",
    "cate2-00123.bmp",
    "cate2-00124.bmp",
    "cate2-00126.bmp",
    "cate2-00127.bmp",
    "cate2-00128.bmp",
    "cate2-00129.bmp",
    "cate2-00130.bmp",
    "cate2-00133.bmp",
    "cate2-00134.bmp",
    "cate2-00135.bmp",
    "cate2-00136.bmp",
    "cate2-00138.bmp",
    "cate2-00139.bmp",
    "cate2-00140.bmp",
    "cate2-00142.bmp",
    "cate2-00143.bmp",
    "cate2-00145.bmp",
    "cate2-00146.bmp",
    "cate2-00147.bmp",
    "cate2-00150.bmp",
    "cate2-00151.bmp",
    "cate2-00152.bmp",
    "cate2-00153.bmp",
    "cate2-00154.bmp",
    "cate2-00157.bmp",
    "cate2-00159.bmp",
    "cate2-00160.bmp",
    "cate2-00162.bmp",
    "cate2-00163.bmp",
    "cate2-00165.bmp",
    "cate2-00167.bmp",
    "cate2-00170.bmp",
    "cate2-00171.bmp",
    "cate2-00172.bmp",
    "cate2-00173.bmp",
    "cate2-00174.bmp",
    "cate2-00175.bmp",
    "cate2-00176.bmp",
    "cate2-00177.bmp",
    "cate2-00178.bmp",
    "cate2-00179.bmp",
    "cate2-00180.bmp",
    "cate2-00182.bmp",
    "cate2-00183.bmp",
    "cate2-00185.bmp",
    "cate2-00186.bmp",
    "cate2-00187.bmp",
    "cate2-00188.bmp",
    "cate2-00189.bmp",
    "cate2-00191.bmp",
    "cate2-00192.bmp",
    "cate2-00193.bmp",
    "cate2-00194.bmp",
    "cate2-00197.bmp",
    "cate2-00198.bmp",
    "cate2-00199.bmp",
    "cate2-00200.bmp",
    "cate2-00201.bmp",
    "cate2-00202.bmp",
    "cate2-00203.bmp",
    "cate2-00204.bmp",
    "cate2-00205.bmp",
    "cate2-00206.bmp",
    "cate2-00207.bmp",
    "cate2-00209.bmp",
    "cate2-00211.bmp",
    "cate2-00212.bmp",
    "cate2-00214.bmp",
    "cate2-00215.bmp",
    "cate2-00216.bmp",
    "cate2-00217.bmp",
    "cate2-00218.bmp",
    "cate2-00219.bmp",
    "cate2-00220.bmp",
    "cate3-00003.bmp",
    "cate3-00006.bmp",
    "cate3-00007.bmp",
    "cate3-00008.bmp",
    "cate3-00009.bmp",
    "cate3-00013.bmp",
    "cate3-00014.bmp",
    "cate3-00016.bmp",
    "cate3-00018.bmp",
    "cate3-00019.bmp",
    "cate3-00020.bmp",
    "cate3-00021.bmp",
    "cate3-00023.bmp",
    "cate3-00026.bmp",
    "cate3-00027.bmp",
    "cate3-00028.bmp",
    "cate3-00029.bmp",
    "cate3-00031.bmp",
    "cate3-00032.bmp",
    "cate3-00033.bmp",
    "cate3-00034.bmp",
    "cate3-00035.bmp",
    "cate3-00036.bmp",
    "cate3-00037.bmp",
    "cate3-00039.bmp",
    "cate3-00040.bmp",
    "cate3-00041.bmp",
    "cate3-00042.bmp",
    "cate3-00043.bmp",
    "cate3-00044.bmp",
    "cate3-00045.bmp",
    "cate4-00069.bmp",
    "cate4-00070.bmp",
    "cate4-00072.bmp",
    "cate4-00073.bmp",
    "cate4-00075.bmp",
    "cate4-00077.bmp",
    "cate4-00079.bmp",
    "cate4-00082.bmp",
    "cate4-00085.bmp",
    "cate4-00086.bmp",
    "cate4-00087.bmp",
    "cate4-00088.bmp",
    "cate4-00089.bmp",
    "cate4-00091.bmp",
    "cate4-00094.bmp",
    "cate4-00095.bmp",
    "cate4-00099.bmp",
    "cate4-00100.bmp",
    "cate4-00101.bmp",
    "cate4-00102.bmp",
    "cate4-00103.bmp",
    "cate4-00104.bmp",
    "cate4-00105.bmp",
    "cate4-00106.bmp",
    "cate4-00107.bmp",
    "cate4-00108.bmp",
    "cate4-00111.bmp",
    "cate4-00112.bmp",
    "cate4-00113.bmp",
    "cate4-00114.bmp",
    "cate4-00116.bmp",
    "cate4-00117.bmp",
    "cate4-00118.bmp",
    "cate4-00119.bmp",
    "cate4-00120.bmp",
    "cate4-00121.bmp",
    "cate4-00124.bmp",
    "cate4-00127.bmp",
    "cate4-00129.bmp",
    "cate4-00130.bmp",
    "cate4-00131.bmp",
    "cate4-00133.bmp",
    "cate4-00134.bmp",
    "cate4-00135.bmp",
    "cate4-00137.bmp",
    "cate4-00139.bmp"];  //接收圖片陣列

let currentIndex1 = 0;
let currentIndex2 = 0;
let oldIndex1 = -1;

// 圖片相對路徑
const folder1 = "./牙齒/train/images/"; 
const folder2 = "./牙齒/train/masks/";

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

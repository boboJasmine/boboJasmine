const changeImage = document.getElementById("sliderButton");
const image1 = document.getElementById("foregroundImg");
const image2 = document.getElementById("backgroundImg");

let imageNames1 = ["exp1_num_4727.jpg", "exp1_num_4944.jpg", "exp1_num_6984.jpg", "exp1_num_3667.jpg", 
    "exp1_num_9473.jpg", "exp1_num_36290.jpg", "exp1_num_40410.jpg", "exp1_num_51674.jpg",
    "exp1_num_54246.jpg", "exp1_num_108719.jpg", "exp1_num_108889.jpg", "exp1_num_262480.jpg",
    "exp1_num_265077.jpg", "exp1_num_290998.jpg", "exp1_num_297464.jpg", "exp1_num_308015.jpg",
    "exp1_num_317483.jpg", "exp1_num_322605.jpg", "exp1_num_327970.jpg", "exp1_num_346311.jpg",
    "exp2_num_3696.jpg", "exp2_num_4748.jpg", "exp2_num_4964.jpg", "exp2_num_7009.jpg",
    "exp2_num_9496.jpg", "exp2_num_36302.jpg", "exp2_num_40424.jpg", "exp2_num_51697.jpg",
    "exp2_num_54273.jpg", "exp2_num_108741.jpg", "exp2_num_108923.jpg", "exp2_num_262572.jpg",
    "exp2_num_265103.jpg", "exp2_num_291023.jpg", "exp2_num_297490.jpg", "exp2_num_308043.jpg",
    "exp2_num_317512.jpg", "exp2_num_322630.jpg", "exp2_num_327997.jpg", "exp3_num_853.jpg",
    "exp3_num_3710.jpg", "exp3_num_4764.jpg", "exp3_num_4978.jpg", "exp3_num_7023.jpg",
    "exp3_num_9508.jpg", "exp3_num_36246.jpg", "exp3_num_40438.jpg", "exp3_num_51711.jpg",
    "exp3_num_54291.jpg", "exp3_num_108757.jpg", "exp3_num_262601.jpg", "exp3_num_265117.jpg",
    "exp3_num_291038.jpg", "exp3_num_297506.jpg", "exp3_num_308061.jpg", "exp3_num_317526.jpg",
    "exp3_num_322643.jpg", "exp3_num_328014.jpg", "exp3_num_346347.jpg", "exp4_num_3724.jpg",
    "exp4_num_4779.jpg", "exp4_num_4995.jpg", "exp4_num_7036.jpg", "exp4_num_9520.jpg",
    "exp4_num_36258.jpg", "exp4_num_40450.jpg", "exp4_num_51725.jpg", "exp4_num_54308.jpg",
    "exp4_num_108774.jpg", "exp4_num_262626.jpg", "exp4_num_265131.jpg", "exp4_num_291052.jpg",
    "exp4_num_297524.jpg", "exp4_num_308078.jpg", "exp4_num_317540.jpg", "exp4_num_322656.jpg",
    "exp4_num_328029.jpg", "exp5_num_3746.jpg", "exp5_num_4801.jpg", "exp5_num_5022.jpg",
    "exp5_num_7054.jpg", "exp5_num_9549.jpg", "exp5_num_36269.jpg", "exp5_num_40480.jpg",
    "exp5_num_51739.jpg", "exp5_num_54331.jpg", "exp5_num_108791.jpg", "exp5_num_262654.jpg",
    "exp5_num_265149.jpg", "exp5_num_291077.jpg", "exp5_num_297552.jpg", "exp5_num_308098.jpg",
    "exp5_num_317558.jpg", "exp5_num_322672.jpg", "exp5_num_328057.jpg", "exp5_num_346381.jpg",
    "exp6_num_3789.jpg", "exp6_num_4841.jpg", "exp6_num_5106.jpg", "exp6_num_7102.jpg",
    "exp6_num_9594.jpg", "exp6_num_36280.jpg", "exp6_num_40515.jpg", "exp6_num_51771.jpg",
    "exp6_num_54366.jpg", "exp6_num_108812.jpg", "exp6_num_262705.jpg", "exp6_num_265182.jpg",
    "exp6_num_291134.jpg", "exp6_num_297601.jpg", "exp6_num_308130.jpg", "exp6_num_317592.jpg",
    "exp6_num_322697.jpg", "exp6_num_328105.jpg", "exp6_num_346414.jpg"];

let imageNames2 = ["exp1_num_4727.png", "exp1_num_4944.png", "exp1_num_6984.png", "exp1_num_3667.png", 
    "exp1_num_9473.png", "exp1_num_36290.png", "exp1_num_40410.png", "exp1_num_51674.png",
    "exp1_num_54246.png", "exp1_num_108719.png", "exp1_num_108889.png", "exp1_num_262480.png",
    "exp1_num_265077.png", "exp1_num_290998.png", "exp1_num_297464.png", "exp1_num_308015.png",
    "exp1_num_317483.png", "exp1_num_322605.png", "exp1_num_327970.png", "exp1_num_346311.png",
    "exp2_num_3696.png", "exp2_num_4748.png", "exp2_num_4964.png", "exp2_num_7009.png",
    "exp2_num_9496.png", "exp2_num_36302.png", "exp2_num_40424.png", "exp2_num_51697.png",
    "exp2_num_54273.png", "exp2_num_108741.png", "exp2_num_108923.png", "exp2_num_262572.png",
    "exp2_num_265103.png", "exp2_num_291023.png", "exp2_num_297490.png", "exp2_num_308043.png",
    "exp2_num_317512.png", "exp2_num_322630.png", "exp2_num_327997.png", "exp3_num_853.png",
    "exp3_num_3710.png", "exp3_num_4764.png", "exp3_num_4978.png", "exp3_num_7023.png",
    "exp3_num_9508.png", "exp3_num_36246.png", "exp3_num_40438.png", "xp3_num_51711.png",
    "exp3_num_54291.png", "exp3_num_108757.png", "exp3_num_262601.png", "exp3_num_265117.png",
    "exp3_num_291038.png", "exp3_num_297506.png", "exp3_num_308061.png", "exp3_num_317526.png",
    "exp3_num_322643.png", "exp3_num_328014.png", "exp3_num_346347.png", "exp4_num_3724.png",
    "exp4_num_4779.png", "exp4_num_4995.png", "exp4_num_7036.png", "exp4_num_9520.png",
    "exp4_num_36258.png", "exp4_num_40450.png", "exp4_num_51725.png", "exp4_num_54308.png",
    "exp4_num_108774.png", "exp4_num_262626.png", "exp4_num_265131.png", "exp4_num_291052.png",
    "exp4_num_297524.png", "exp4_num_308078.png", "exp4_num_317540.png", "exp4_num_322656.png",
    "exp4_num_328029.png", "exp5_num_3746.png", "exp5_num_4801.png", "exp5_num_5022.png",
    "exp5_num_7054.png", "exp5_num_9549.png", "exp5_num_36269.png", "exp5_num_40480.png",
    "exp5_num_51739.png", "exp5_num_54331.png", "exp5_num_108791.png", "exp5_num_262654.png",
    "exp5_num_265149.png", "exp5_num_291077.png", "exp5_num_297552.png", "exp5_num_308098.png",
    "exp5_num_317558.png", "exp5_num_322672.png", "exp5_num_328057.png", "exp5_num_346381.png",
    "exp6_num_3789.png", "exp6_num_4841.png", "exp6_num_5106.png", "exp6_num_7102.png",
    "exp6_num_9594.png", "exp6_num_36280.png", "exp6_num_40515.png", "exp6_num_51771.png",
    "exp6_num_54366.png", "exp6_num_108812.png", "exp6_num_262705.png", "exp6_num_265182.png",
    "exp6_num_291134.png", "exp6_num_297601.png", "exp6_num_308130.png", "exp6_num_317592.png",
    "exp6_num_322697.png", "exp6_num_328105.png", "exp6_num_346414.png"];  //接收圖片陣列

let currentIndex1 = 0;
let currentIndex2 = 0;
// let oldIndex1 = -1;

// 圖片相對路徑
const folder1 = "./瑕疵完成/img/";
const folder2 = "./瑕疵完成/mask/";
let newImageName1, newImageName2, newImageUrl1, newImageUrl2;

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
        newImageName1 = imageNames1[currentIndex1];
        newImageName2 = imageNames2[currentIndex2];

        newImageUrl1 = folder1 + newImageName1;
        newImageUrl2 = folder2 + newImageName2;

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
    // image1.style.visibility = "visible";
    image1.style.opacity = "1"; /* 比賽時新增的 */
    
    currentIndex1 = (currentIndex1 + 1) % imageNames1.length;
    console.log(currentIndex1);
    currentIndex2 = (currentIndex2 + 1) % imageNames2.length;
    console.log(currentIndex1, currentIndex2);

    newImageName1 = imageNames1[currentIndex1];
    newImageName2 = imageNames2[currentIndex2];

    newImageUrl1 = folder1 + newImageName1;
    newImageUrl2 = folder2 + newImageName2;

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

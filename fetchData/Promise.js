import fetchs from './fetchDat.js';

console.log(fetchs);
// document.write("<script src='fetchData.js'></script>");
const promises = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fetchs) resolve(fetchs);
            reject(new Error('데이터 불러오기 실패'));
        }, 0);
    });
};

// promises().then((v) => console.log(v));

(async () => {
    try {
        const data = await promises();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
})();

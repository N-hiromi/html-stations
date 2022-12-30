// const { resolveConfig } = require("prettier");

async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList);
  return await result;
}

async function test(data) {
  console.log("start");
  const pushFullName = () => {
    data.map((ob) => {
      ob.full_name = ob.family_name + " " + ob.first_name;
    })
  }
  return new Promise((res) => {
    setTimeout( () => {
      pushFullName();
      console.log("3秒たった");
      res();
    }, 3000)
  }).then(() => {
    return data;
  })
}
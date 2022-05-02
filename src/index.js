import "./styles.css";

const onClickedAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する
const createIncompleteList = (todoText) => {
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liの生成
  const li = document.createElement("li");
  li.innerText = todoText;

  // 完了ボタンの生成;
  const compeleteButton = document.createElement("button");
  compeleteButton.innerText = "完了";
  // 完了ボタン押下時
  compeleteButton.addEventListener("click", () => {
    const compeleteTarget = compeleteButton.parentNode;
    const text = compeleteTarget.firstElementChild.innerText;

    // 未完了リストから削除
    deleteFromIncompleteList(compeleteTarget);

    // 未完了リストのdivタグを空に
    compeleteTarget.textContent = null;

    // 完了リストに追加するliタグ、テキスト文生成
    const compeleteList = document.createElement("li");
    compeleteList.innerText = text;

    // 完了リストに追加する戻すボタン生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    // 戻すボタン押下時
    returnButton.addEventListener("click", () => {
      document
        .getElementById("compelete-list")
        .removeChild(returnButton.parentNode);

      const completeText = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(completeText);
    });

    // 完了リストにliタグ、戻すボタンを追加
    compeleteTarget.appendChild(compeleteList);
    compeleteTarget.appendChild(returnButton);
    document.getElementById("compelete-list").appendChild(compeleteTarget);
  });

  // 削除ボタンの生成;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compeleteButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickedAdd());

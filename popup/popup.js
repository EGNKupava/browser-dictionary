const addWord = document.getElementById('add-word');

addWord.addEventListener('click', () => {
  const options = {active: true};
  // about tabs
  //https://developer.chrome.com/docs/extensions/reference/tabs/
  chrome.tabs.query(options, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      alert(tab.id);
    } else {
      alert('There are no active tabs');
    }
  });
});

const injectSpec = {
  target: {tabId: tab.id, allFrames: true},
  func: grabImages,
};

// chrome scripting API https://developer.chrome.com/docs/extensions/reference/scripting/
chrome.scripting.executeScript(injectSpec, onResult);

function grabImages() {
  // TODO - Запросить список изображений
  // и вернуть список их URL-ов
  const images = document.querySelectorAll('img');
  return Array.from(images).map((image) => image.src);
}

function onResult(frames) {
  // Если результатов нет
  if (!frames || !frames.length) {
    alert('Could not retrieve images from specified page');
    return;
  }
  // Объединить списки URL из каждого фрейма в один массив
  const imageUrls = frames
    .map((frame) => frame.result)
    .reduce((r1, r2) => r1.concat(r2));
  // Скопировать в буфер обмена полученный массив
  // объединив его в строку, используя возврат каретки
  // как разделитель
  window.navigator.clipboard.writeText(imageUrls.join('\n')).then(() => {
    // закрыть окно расширения после
    // завершения
    window.close();
  });
}

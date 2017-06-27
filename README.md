# cssClassFramework
cssClass - js-фреймворк для работы с CSS классами DOM элементов. 
Содержит методы:  
**.hasClass(classArr[,data])**</br>
**.addClass(classArr)**</br>
**.removeClass(classArr)**</br>
**.toggleClass(classArr)**</br>

Классы в аргументе _ClassArr_ можно задать строкой, перечислив их через пробел, или массивом.</br>

Метод **hasClass(classArr[,data])** проверяет наличие класса или классов у выбранных элементов страницы. 
Если у элемента отсутствует хотя бы один класс из _classArr_, метод вернет _false_.</br>
Для коллекции элементов в методе **hasClass(classArr[,data])** можно указать второй аргумент (по умолчанию _true_)</br>
_false_ - если проверяем наличие класса хотя бы в одном элементе.</br>
_true_ - если проверяем наличие класса во всех элементах.</br>

## Пример использования:
```html
if (document.getElementById('3').hasClass('circle coral'))
	document.getElementById('3').removeClass('circle').addClass('square');
```

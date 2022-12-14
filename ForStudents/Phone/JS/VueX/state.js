
//Объект состояния приложения
const state={

StatusOfAutorization:'UserWasNotLoggedIn',//Статус авторизации пользователя

SubGroup:'1',

SelectedDate:'',//Выбранная дата (в нынешнем серединном блоке)
				
SelectedMonth:'',//Выбранный месяц (в нынешнем серединном блоке)

ActiveMonthOrWeek:'Week',//Активный режим календаря: режим месяца или недели

AnimationOfMonthIsPlaying:false,//Анимация изменения состояния месяцев проигрывается или нет сворачивается или разворачивается

//Анимация изменения состояния календаря не проигрывается или указывается направление анимации скролла
AnimationOfCalendarIsPlaying:false,

//Показывает, куда нужно двигаться анимации календаря
DirectionOfCalendarAnimation:'',


//Анимация расписания
AnimationOfTimetableIsPlaying:false,



//Объекты с данными о месяцах

PresentBlockDataObject:{},//Объект состояния для нынешнего блока
				
LeftBlockDataObject:{},//Объект состояния для левого блока
				
RightBlockDataObject:{},//Объект состояния для правого блока



//высота блока месяца должна быть в 8 раз больше высоты блока неделиа!!!

//Высота блока месяца (имееет значение для анимации месяца)
HeightOfMonthBlock:400,


//Высота блока недель (имеет значение для анимации месяца)
HeightOfWeekBlock:50,


//Названия для всех месяцев

NamesOfMonths:{
						
	0: 'января', 
	1: 'февраля', 
	2: 'марта', 
	3: 'апреля', 
	4: 'мая', 
	5: 'июня', 
	6: 'июля', 
	7: 'августа', 
	8: 'сентября', 
	9: 'октября', 
	10: 'ноября', 
	11: 'декабря'
					
},

}




















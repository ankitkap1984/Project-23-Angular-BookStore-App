// MODULE
var bookcartApp = angular.module('bookcartApp', ['ngRoute', 'ngResource','ngAnimate']);

//Routes
bookcartApp.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"book.html",
		controller:"bodyController"
	})
	.when("/cart",{
		templateUrl:"cart.html",
		controller:"cartController"
	})
	.otherwise({
		redirectTo:"/"
	})
});

//Custom Services
bookcartApp.factory("bookService",function(){
	var bookList=[
	{
	bookImage:"2.jpg",
	bookName:"Game Of Thrones",
	Price:"10",
	Rating:"4.9",
	Binding:"Hard",
	Publisher:"GOT",
	Released:"2014",
	Details:"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. It is filmed at Titanic Studios in Belfast, on location elsewhere in the United Kingdom, and in Croatia, Iceland, Malta, Morocco, Spain, and the United States. The series premiered on HBO in the United States on April 17, 2011, and its sixth season ended on June 26, 2016. The series was renewed for a seventh season, scheduled to premiere in mid-2017, with a total of seven episodes[1] and will conclude with its eighth season in 2018"},
		{
	bookImage:"3.jpg",
	bookName:"Harry Potter",
	Price:"9",
	Rating:"4.7",
	Binding:"Soft",
	Publisher:"Harry Potter",
	Released:"2012",
	Details:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."},
	{
	bookImage:"4.jpg",
	bookName:"Alchemist",
	Price:"6",
	Rating:"4",
	Binding:"Soft",
	Publisher:"Al",
	Released:"2010",
	Details:"Alchemy is a philosophical and protoscientific tradition practiced throughout Europe, Egypt and Asia. It aimed to purify, mature, and perfect certain objects.[1][2][n 1] Common aims were chrysopoeia, the transmutation of base metals (e.g., lead) into noble ones (particularly gold); the creation of an elixir of immortality; the creation of panaceas able to cure any disease; and the development of an alkahest, a universal solvent.[3] The perfection of the human body and soul was thought to permit or result from the alchemical magnum opus and, in the Hellenistic and western tradition, the achievement of gnosis.[2] In Europe, the creation of a philosopher's stone was variously connected with all of these projects."},
	{
	bookImage:"5.jpg",
	bookName:"AngularJS",
	Price:"15",
	Rating:"4.6",
	Binding:"Soft",
	Publisher:"Angular",
	Released:"2016",
	Details:"AngularJS (commonly referred to as Angular or Angular.js) is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications."
	}
	];
	return {
		getBooks: function(){
			return bookList;
		}
	}
});

bookcartApp.factory("cartService",function(){
	var cartBooksArr=[];
	return {
		addBooksTocart:function(bookRepeat){
			cartBooksArr.push(bookRepeat);
		},
		selectedCartList: function(){
			return cartBooksArr
		},
		buyBook:function(bookRepeat){
			alert("Thanks for buying " + bookRepeat.bookName)
		}
	}
});

//Controller
bookcartApp.controller('headController',['$scope','$location',function($scope,$location){
	$scope.appDetails={
		title:"Bookart",
		tagLine:"We have over 1 Million books for you"
	};
	$scope.nav={};
	$scope.nav.isActive=function(path){
		if (path===$location.path()){return true}
		return false
	}
}]);

bookcartApp.controller('bodyController',['$scope','bookService','cartService',function($scope,bookService,cartService){
	$scope.books=bookService.getBooks();
	$scope.addToCart=function(bookRepeat){
		cartService.addBooksTocart(bookRepeat);
	}
}]);

bookcartApp.controller('cartController',['$scope','cartService',function($scope,cartService){
	$scope.cart=cartService.selectedCartList();
	$scope.buy=function(bookRepeat){
		cartService.buyBook(bookRepeat);
	}
}]);
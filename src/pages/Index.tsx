import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                K-Star Fan Zone
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Возможности
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Тарифы
              </a>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  K-POP
                </span>
                <br />
                <span className="text-gray-900">Вселенная</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Твой личный мир K-pop: календарь концертов, голосования за
                айдолов, общение с фанатами и эксклюзивный контент в одном месте
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-3"
                >
                  Начать за 100₽
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 text-lg px-8 py-3"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center"
                  alt="K-pop концерт"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Всё для настоящих <span className="text-pink-600">K-pop</span>{" "}
              фанатов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Погрузись в мир корейской поп-культуры с нашими эксклюзивными
              возможностями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Calendar" size={28} className="text-white" />
                </div>
                <CardTitle className="text-pink-900">
                  Календарь концертов
                </CardTitle>
                <CardDescription>
                  Не пропусти ни одного выступления любимых артистов
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop&crop=center"
                  alt="Концерт"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 text-sm">
                  Персональные уведомления, билеты и встречи с айдолами
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Heart" size={28} className="text-white" />
                </div>
                <CardTitle className="text-purple-900">
                  Голосования за айдолов
                </CardTitle>
                <CardDescription>
                  Поддержи любимых артистов в еженедельных рейтингах
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop&crop=center"
                  alt="K-pop группа"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 text-sm">
                  Эксклюзивные опросы и влияние на чарты популярности
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <CardTitle className="text-indigo-900">Фан-форум</CardTitle>
                <CardDescription>
                  Общайся с единомышленниками со всего мира
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop&crop=center"
                  alt="Фанаты"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 text-sm">
                  Закрытые чаты, обмен фото и эксклюзивные новости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* K-pop Groups Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Популярные <span className="text-pink-600">K-pop</span> группы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Следи за своими любимыми артистами и не пропускай новости
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* BABYMONSTER */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-100 to-rose-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">BM</span>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  BABYMONSTER
                </CardTitle>
                <CardDescription className="text-gray-600">
                  7 участниц • Дебют: 2023
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=180&fit=crop&crop=center"
                  alt="BABYMONSTER"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "BATTER UP", "SHEESH"
                </p>
              </CardContent>
            </Card>

            {/* BLACKPINK */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-100 to-pink-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-800 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">BP</span>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  BLACKPINK
                </CardTitle>
                <CardDescription className="text-gray-600">
                  4 участницы • Дебют: 2016
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=180&fit=crop&crop=center"
                  alt="BLACKPINK"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "DDU-DU DDU-DU", "How You Like That"
                </p>
              </CardContent>
            </Card>

            {/* (G)I-DLE */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-100 to-indigo-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">ID</span>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  (G)I-DLE
                </CardTitle>
                <CardDescription className="text-gray-600">
                  5 участниц • Дебют: 2018
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=180&fit=crop&crop=center"
                  alt="(G)I-DLE"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "LATATA", "Tomboy"
                </p>
              </CardContent>
            </Card>

            {/* NMIXX */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-100 to-red-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">NM</span>
                </div>
                <CardTitle className="text-xl text-gray-900">NMIXX</CardTitle>
                <CardDescription className="text-gray-600">
                  6 участниц • Дебют: 2022
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=180&fit=crop&crop=center"
                  alt="NMIXX"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "O.O", "DICE"
                </p>
              </CardContent>
            </Card>

            {/* AESPA */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-100 to-purple-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">æ</span>
                </div>
                <CardTitle className="text-xl text-gray-900">AESPA</CardTitle>
                <CardDescription className="text-gray-600">
                  4 участницы • Дебют: 2020
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=180&fit=crop&crop=center"
                  alt="AESPA"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "Black Mamba", "Next Level"
                </p>
              </CardContent>
            </Card>

            {/* ITZY */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-yellow-100 to-orange-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <CardTitle className="text-xl text-gray-900">ITZY</CardTitle>
                <CardDescription className="text-gray-600">
                  5 участниц • Дебют: 2019
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=180&fit=crop&crop=center"
                  alt="ITZY"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "DALLA DALLA", "WANNABE"
                </p>
              </CardContent>
            </Card>

            {/* TWICE */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-100 to-purple-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">TW</span>
                </div>
                <CardTitle className="text-xl text-gray-900">TWICE</CardTitle>
                <CardDescription className="text-gray-600">
                  9 участниц • Дебют: 2015
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=180&fit=crop&crop=center"
                  alt="TWICE"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "TT", "What Is Love?"
                </p>
              </CardContent>
            </Card>

            {/* STRAY KIDS */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-100 to-blue-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">SK</span>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  STRAY KIDS
                </CardTitle>
                <CardDescription className="text-gray-600">
                  8 участников • Дебют: 2018
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=180&fit=crop&crop=center"
                  alt="STRAY KIDS"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "God's Menu", "Back Door"
                </p>
              </CardContent>
            </Card>

            {/* BTS */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-100 to-pink-200 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">방탄</span>
                </div>
                <CardTitle className="text-xl text-gray-900">BTS</CardTitle>
                <CardDescription className="text-gray-600">
                  7 участников • Дебют: 2013
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=180&fit=crop&crop=center"
                  alt="BTS"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-700 font-medium">
                  Хиты: "Dynamite", "Butter"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Выбери свой <span className="text-pink-600">уровень доступа</span>
            </h2>
            <p className="text-xl text-gray-600">
              Начни с пробного месяца и погрузись в мир K-pop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-pink-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-pink-900">
                  Пробный месяц
                </CardTitle>
                <CardDescription>Идеально для знакомства</CardDescription>
                <div className="text-4xl font-bold text-pink-600 mt-4">
                  100₽
                  <span className="text-lg text-gray-500 font-normal">
                    /месяц
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-pink-600" />
                  <span className="text-gray-700">
                    Полный доступ ко всем функциям
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-pink-600" />
                  <span className="text-gray-700">Календарь концертов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-pink-600" />
                  <span className="text-gray-700">Участие в голосованиях</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-pink-600" />
                  <span className="text-gray-700">Доступ к фан-форуму</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                  Попробовать сейчас
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярно
                </span>
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-900">
                  Полный доступ
                </CardTitle>
                <CardDescription>Для настоящих фанатов</CardDescription>
                <div className="text-4xl font-bold text-purple-600 mt-4">
                  200₽
                  <span className="text-lg text-gray-500 font-normal">
                    /месяц
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Все возможности пробного
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span className="text-gray-700">Эксклюзивный контент</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span className="text-gray-700">Приоритетная поддержка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Ранний доступ к новостям
                  </span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-bold text-lg">K-Star Fan Zone</span>
              </div>
              <p className="text-gray-400 text-sm">
                Твой путь в мир K-pop начинается здесь
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Возможности</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Календарь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Голосования
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Форум
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Icon name="Instagram" size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Icon name="Twitter" size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 K-Star Fan Zone. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

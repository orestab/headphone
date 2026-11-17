import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Headphones, 
  Volume2, 
  VolumeX, 
  BatteryCharging, 
  Bluetooth, 
  Sparkles, 
  ShoppingBag, 
  Check, 
  ChevronDown,
  Zap,
  Shield
} from 'lucide-react';

// Дані для перемикання кольорів продукту
const colorVariants = {
  obsidian: {
    name: 'Obsidian Black',
    accent: '#6366f1',
    glow: 'from-indigo-600/30 via-purple-600/10 to-transparent',
    ring: 'ring-indigo-500',
    bgDot: 'bg-zinc-900',
    badge: 'Класичний матовий',
    price: 299
  },
  crimson: {
    name: 'Crimson Pulse',
    accent: '#f43f5e',
    glow: 'from-rose-600/30 via-orange-600/10 to-transparent',
    ring: 'ring-rose-500',
    bgDot: 'bg-rose-600',
    badge: 'Лімітована серія',
    price: 329
  },
  emerald: {
    name: 'Cyber Emerald',
    accent: '#10b981',
    glow: 'from-emerald-600/30 via-teal-600/10 to-transparent',
    ring: 'ring-emerald-500',
    bgDot: 'bg-emerald-500',
    badge: 'Новинка 2026',
    price: 319
  }
};

const faqs = [
  {
    q: 'Скільки часу тримає заряд акумулятора?',
    a: 'До 60 годин безперервного прослуховування з вимкненим ANC та до 45 годин з активним шумозаглушенням. 5 хвилин зарядки дають 4 години музики.'
  },
  {
    q: 'Чи підтримується мультипоінт підключення?',
    a: 'Так, навушники одночасно підключаються до ноутбука та смартфона і миттєво перемикаються між ними при вхідному дзвінку.'
  },
  {
    q: 'Яка гарантія на пристрій?',
    a: 'Офіційна гарантія 24 місяці з миттєвою заміною пристрою у разі виявлення заводського дефекту.'
  }
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const [ancMode, setAncMode] = useState(true);
  const [cartAdded, setCartAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const current = colorVariants[selectedColor];

  const handleAddToCart = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Динамічне фонове світіння, яке змінює колір разом із навушниками */}
      <div 
        className={`fixed top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-b ${current.glow} blur-[140px] pointer-events-none transition-all duration-1000`}
      />

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl glass rounded-full px-6 py-3.5 flex justify-between items-center z-50"
      >
        <div className="flex items-center gap-2.5 font-bold tracking-wider text-lg">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Headphones className="w-4 h-4 text-white" />
          </div>
          <span>AURA<span className="text-zinc-500 font-light">PRO</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Технології</a>
          <a href="#sound" className="hover:text-white transition-colors">Звук та ANC</a>
          <a href="#faq" className="hover:text-white transition-colors">Питання</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          {cartAdded ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4" />}
          <span>{cartAdded ? 'Додано!' : `$${current.price}`}</span>
        </motion.button>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* Ліва колонка: Текст та вибір кольору */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.badge} • Просторове аудіо 360°</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-gradient">
            Відчуй кожну ноту тиші.
          </h1>

          <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
            Адаптивне шумозаглушення нового покоління, титанові драйвери 40 мм та преміальні матеріали, створені для абсолютного занурення.
          </p>

          {/* Перемикач кольорів */}
          <div className="pt-2">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-semibold">
              Колір корпусу: <span className="text-white">{current.name}</span>
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(colorVariants).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setSelectedColor(key)}
                  className={`w-10 h-10 rounded-full ${item.bgDot} border-2 border-white/20 transition-all cursor-pointer relative ${
                    selectedColor === key ? `ring-2 ${item.ring} ring-offset-4 ring-offset-[#050507] scale-110` : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={item.name}
                />
              ))}
            </div>
          </div>

          {/* Кнопки дії */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAddToCart}
              style={{ backgroundColor: current.accent }}
              className="px-8 py-4 rounded-2xl font-semibold text-white shadow-lg transition-colors duration-500 flex items-center gap-2 cursor-pointer"
            >
              <span>Замовити зараз — ${current.price}</span>
            </motion.button>

            <a 
              href="#sound" 
              className="px-6 py-4 rounded-2xl glass font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Тест режиму ANC
            </a>
          </div>
        </motion.div>

        {/* Права колонка: Анімована 3D-візуалізація продукту (чистий CSS + SVG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center z-10"
        >
          {/* Орбітальні кільця навколо навушників */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-white/10 pointer-events-none"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[260px] h-[260px] md:w-[330px] md:h-[330px] rounded-full border border-white/5 pointer-events-none"
          />

          {/* Картка продукту, що левітує */}
          <div className="animate-float relative">
            <div 
              style={{ boxShadow: `0 25px 90px -15px ${current.accent}66` }}
              className="w-72 h-72 md:w-88 md:h-88 rounded-[48px] glass border border-white/20 flex flex-col items-center justify-center relative overflow-hidden transition-shadow duration-700"
            >
              {/* Внутрішній блік */}
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
              
              {/* Стилізована іконка навушників */}
              <motion.div
                key={selectedColor}
                initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Headphones 
                  size={150} 
                  strokeWidth={1.2} 
                  style={{ color: current.accent }}
                  className="drop-shadow-2xl transition-colors duration-500"
                />
              </motion.div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                  {current.name}
                </span>
              </div>
            </div>

            {/* Плаваючий бейдж зліва */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-10 glass px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
            >
              <BatteryCharging className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs font-bold">60 год</div>
                <div className="text-[10px] text-zinc-400">Автономність</div>
              </div>
            </motion.div>

            {/* Плаваючий бейдж справа */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-12 glass px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
            >
              <Bluetooth className="w-5 h-5 text-sky-400" />
              <div>
                <div className="text-xs font-bold">Lossless</div>
                <div className="text-[10px] text-zinc-400">Bluetooth 5.4</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* BENTO GRID FEATURES */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Інженерія без компромісів</h2>
          <p className="text-zinc-400 mt-3">Кожна деталь спроєктована для студійної чистоти звучання</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6 text-amber-400" />,
              title: 'Процесор Aura H2',
              desc: 'Аналізує навколишній шум 48 000 разів на секунду та миттєво адаптує звукову сцену.',
              span: 'md:col-span-2'
            },
            {
              icon: <Shield className="w-6 h-6 text-emerald-400" />,
              title: 'Захист IPX5',
              desc: 'Не бояться дощу, снігу та інтенсивних тренувань у залі.',
              span: ''
            },
            {
              icon: <Sparkles className="w-6 h-6 text-purple-400" />,
              title: 'Амбушури з ефектом памʼяті',
              desc: 'Ультрамʼяка еко-шкіра та піна Memory Foam не тиснуть навіть після 8 годин роботи.',
              span: ''
            },
            {
              icon: <Bluetooth className="w-6 h-6 text-sky-400" />,
              title: 'Ультранизька затримка 18 мс',
              desc: 'Ідеальна синхронізація звуку та зображення для ігор і монтажу відео.',
              span: 'md:col-span-2'
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.2)' }}
              className={`glass p-8 rounded-3xl transition-colors ${card.span}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ANC SIMULATOR */}
      <section id="sound" className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[36px] p-8 md:p-12 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold mb-3">Інтерактивний тест шумозаглушення</h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
            Перемкніть режим нижче, щоб побачити, як алгоритм гасить зовнішні звукові хвилі міста.
          </p>

          {/* Візуалізатор хвиль */}
          <div className="h-24 flex items-center justify-center gap-1.5 mb-8">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  backgroundColor: ancMode ? current.accent : '#ef4444',
                  transform: ancMode ? 'scaleY(0.25)' : 'scaleY(1.2)',
                  opacity: ancMode ? 0.5 : 1
                }}
                className="w-1.5 rounded-full eq-bar transition-all duration-500"
              />
            ))}
          </div>

          {/* Кнопка-перемикач ANC */}
          <div className="inline-flex p-1.5 rounded-2xl bg-black/50 border border-white/10">
            <button
              onClick={() => setAncMode(true)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                ancMode ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <VolumeX className="w-4 h-4" />
              <span>ANC Увімкнено (-45 дБ)</span>
            </button>
            <button
              onClick={() => setAncMode(false)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                !ancMode ? 'bg-rose-500 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Прозорий режим</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ACCORDION FAQ */}
      <section id="faq" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Часті запитання</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center font-semibold cursor-pointer"
              >
                <span>{item.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-zinc-600 border-t border-white/5 mt-12">
        AURA PRO Showcase • React + Tailwind CSS v4 + Framer Motion
      </footer>

    </div>
  );
}
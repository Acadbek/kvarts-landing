'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Copy, Menu, Plus, Search } from 'lucide-react'

const heroImage = '/kvarts-factory.png'

const products = [
  { number: '01', title: 'Стеклянные банки', text: 'Надёжная упаковка для пищевой промышленности и напитков.', tag: 'Каталог продукции' },
  { number: '02', title: 'Стеклянные бутылки', text: 'Функциональные решения для воды, напитков и пищевых продуктов.', tag: 'Каталог продукции' },
  { number: '03', title: 'Листовое стекло', text: 'Современное стекло для строительства и промышленного применения.', tag: 'Каталог продукции' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="АО Кварц — на главную">
        <span className="brand-mark" aria-hidden="true">◢</span><span className="brand-wordmark">АО КВАРЦ</span>
      </a>
      <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Основная навигация">
        <a className="active" href="#top">Главная</a>
        <a href="#about">О нас</a>
        <a href="#products">Продукция</a>
        <a href="#company">Корпоративные сведения</a>
        <a href="#contact">Напишите нам</a>
      </nav>
      <div className="header-actions">
        <button className="search-button" aria-label="Поиск"><Search size={15} /><span>Поиск</span><kbd>⌘ K</kbd></button>
        <button className="lang-button" aria-label="Выбрать язык">RU <ChevronDown size={14} /></button>
        <button className="menu-button" aria-label="Открыть меню" onClick={() => setOpen(!open)}><Menu size={19} /></button>
      </div>
    </header>
  )
}

export default function Page() {
  const [copied, setCopied] = useState(false)
  const copyAddress = async () => {
    await navigator.clipboard?.writeText('150900, Узбекистан, Ферганская область, г. Кувасай, ул. Мустакиллик, 2а')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <main id="top">
      <div className="topline"><span>АО КВАРЦ</span><span>Стекольный завод полного цикла</span><span>150900, Узбекистан · +998 73 372 44 34</span></div>
      <Header />

      <section className="hero">
        <img src={heroImage} alt="Производственная линия стекольного завода" />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow light">АО КВАРЦ / С 1975 ГОДА</p>
          <h1>Стекло,<br /><span>которому</span><br />доверяют.</h1>
          <p className="hero-copy">Создаём качественную стеклянную продукцию для бизнеса, промышленности и повседневной жизни.</p>
          <div className="hero-links"><a className="button button-light" href="#products">Смотреть продукцию <ArrowUpRight size={16} /></a><a className="text-link light-link" href="#about">Узнать о предприятии <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-meta"><span>01 / 03</span><span className="line" /><span>Кувасай, Узбекистан</span></div>
      </section>

      <section className="intro" id="about">
        <div className="section-label"><span>01</span><span>О предприятии</span></div>
        <div className="intro-body"><p className="display-text">АО «Кварц» — одно из крупнейших предприятий стекольной промышленности Узбекистана.</p><p className="muted-text">Мы объединяем опыт, технологичность и ответственное производство, чтобы выпускать продукцию стабильного качества для клиентов по всей стране и за её пределами.</p><a className="arrow-link" href="#company">Подробнее о компании <ArrowUpRight size={16} /></a></div>
        <div className="intro-stats"><div><strong>50</strong><span>лет опыта</span></div><div><strong>100+</strong><span>видов продукции</span></div><div><strong>24/7</strong><span>работа производства</span></div></div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading"><div><p className="eyebrow">02 / КАТАЛОГ</p><h2>Продукция<br /><em>Кварца.</em></h2></div><p className="heading-note">От идеи до готового изделия — всё в одном производственном цикле.</p></div>
        <div className="product-list">{products.map((product) => <a className="product-row" href="#contact" key={product.number}><span className="product-number">{product.number}</span><div><span className="product-tag">{product.tag}</span><h3>{product.title}</h3><p>{product.text}</p></div><ArrowUpRight className="product-arrow" size={22} /></a>)}</div>
      </section>

      <section className="company-section" id="company"><div className="company-image"><img src="/kvarts-factory.png" alt="Оборудование завода АО Кварц" /></div><div className="company-copy"><p className="eyebrow">03 / ПРОИЗВОДСТВО</p><h2>Технологии,<br /><em>которые работают.</em></h2><p>Современное оборудование и команда профессионалов позволяют нам отвечать самым высоким требованиям рынка.</p><div className="feature-list"><div><span>01</span><strong>Контроль качества</strong></div><div><span>02</span><strong>Собственное производство</strong></div><div><span>03</span><strong>Ответственный подход</strong></div></div></div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow">04 / КОНТАКТЫ</p><h2>Давайте<br /><em>поговорим.</em></h2></div><div className="contact-details"><p>Отдел продаж и общие вопросы</p><a href="mailto:info@kvarts.uz">info@kvarts.uz <ArrowUpRight size={16} /></a><a href="tel:+998733724434">+998 73 372 44 34 <ArrowUpRight size={16} /></a><button onClick={copyAddress} className="address-button">150900, Узбекистан, Ферганская область,<br />г. Кувасай, ул. Мустакиллик, 2а <Copy size={15} />{copied && <small>Скопировано</small>}</button></div></section>

      <footer><span>© {new Date().getFullYear()} АО «Кварц»</span><span>Стекло. Точность. Надёжность.</span><a href="#top">Наверх <Plus size={14} /></a></footer>
    </main>
  )
}


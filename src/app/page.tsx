import { Metadata } from 'next'
import Image from 'next/image'

const CONFIG = {
  image: 'elena.jpeg',
  title: 'Елена Власова',
  subtitle: 'UI/UX - дизайнер',
}

// Массив с опытом работы
const EXPERIENCE = [
  {
    title: 'UI/UX дизайнер',
    dateFrom: 'май 2024 ',
    dateTo: 'по настоящее время',
    company: 'СёрклДэвз (Минск)',
    responsibilities: [{
      description: 'Разработка дизайна планинга:',
      items: [
      'Работа над интерфейсом приложения по бизнес требованиям',
      'Адаптивный дизайн',
      'Разработка дизайн-системы',
      'Прототипирование элементов'
    ],
    link: ''
  }]
  },
  {
    title: 'UI/UX дизайнер',
    dateFrom: 'апрель 2024',
    dateTo: 'май 2024',
    company: 'Стартап Ray Tech',
    responsibilities: [{
      description: 'Разработка и выпуск лендинга для MVP проекта компании по  внедрению системы умного дома:',
      items: ['Провела конкурентный анализ',
        'Создала прототипы',
        'Создала лендинг и адаптивы к нему'
      ],
      link: 'https://www.behance.net/gallery/199023225/umnyj-dom'
  }]
  },
  {
    title: 'Дизайнер интерфейсов (обучение)',
    dateFrom: 'ноябрь 2022',
    dateTo: 'сентябрь 2023',
    company: 'Яндекс Практикум ',
    responsibilities: [{
      description: 'За время обучения выполнила 4 учебных проекта. <br/> В рамках проекта «Культура и традиции своего города»:',
      items: [
        'Киллер фича - карта маршрутов разной активности по достопримечательностям города',
        'Провела опрос, написала User Stories',
        'Создала прототипы',
        'Создала сайт и адаптивы'
      ],
      link: 'https://www.behance.net/VlasovaElena'
    },{
      description: 'В рамках проекта «Проектирование приложения Praktika.School»:',
      items: [
        'Провела интервью, написала JTBD',
        'Использовала гайдлайны iOS',
        'Провела тестирование прототипа и внесла изменения в проект',
      ],
      link: 'https://www.behance.net/VlasovaElena'
    }]
  }
]

// Массив навыков
const SKILLS = [
  'Figma',
  'Прототипирование',
  'Референсы и мудборды',
  'UI-киты и дизайн системы',
  'Гайдлайны iOS/Android',
  'Теория цвета, типографики, композиции',
  'UX-исследования',
  'A/B и коридорные тестирования',
  'CJM, User Stories, JTBD',
  'Miro',
  'Английский B1',
  'ChatGPT',
  'Trello'
]

// Массив контактов
const CONTACTS = [
  {
    title: 'Телефон',
    value: '+7 (905) 185-38-36',
    link: 'tel:+79051853836',
    icon: 'phone.svg'
  },
  {
    title: 'Telegram',
    value: 'Lena_Vlasova',
    link: 'https://t.me/Lena_Vlasova',
    icon: 'telegram.svg'
  },
  {
    title: 'Email',
    value: 'elenka126@yandex.ru',
    link: 'mailto:elenka126@yandex.ru',
    icon: 'mail.svg'
  },
  {
    title: 'Портфолио',
    value: 'Behance',
    link: 'https://www.behance.net/VlasovaElena',
    icon: 'behance.svg'
  },
  {
    title: 'hh.ru',
    value: 'Резюме',
    link: 'https://ryazan.hh.ru/applicant/resumes/view?resume=cbdf8481ff0c5e6f6c0039ed1f425774567466',
    icon: 'hh.svg'
  }
]

const EDUCATION = {
  date: 2010,
  spec: 'специалист',
  fac: 'Экономический, Экономика и управление на предприятии (по отраслям)',
  university: 'Тамбовский государственный технический университет, Тамбов'
}

const ABOUT_ME = {
  age: '36 лет, Рязань',
  aboutMe: {
    title: 'Обо мне',
    paragraphs: [
      'Всегда интересовалась искусством. В профессии дизайнера мне нравится возможность реализации творческого подхода в достижении бизнес целей. Для меня важен профессиональный  и финансовый рост.',
      'Читаю телеграм-каналы о дизайне Оди, Figma Design, Как это сверстано и т.д. Смотрю ролики на YouTube по Figma.',
      'Интересуюсь историей письменности. Каждый месяц читаю не меньше одной книги, рисую скетчи - это помогает мне развивать художественный вкус и релаксировать.'
    ]
  },
  skills: 'Навыки',
  experience: 'Опыт работы',
  education: 'Образование',
  behanceProject: 'проект на Behance'
}

export const metadata: Metadata = {
  title:  `${CONFIG.title} | ${CONFIG.subtitle}`,
  description: `${CONFIG.title} | ${CONFIG.subtitle}`,
}

export default function Home() {
  return (
    <main className='container mx-auto p-12 bg-white rounded-xl m-4 shadow-xl dark:bg-gray-900'>
      <header>
        <h1 className='ABOUT_ME-5xl font-bold my-6'>{CONFIG.title}</h1>
      </header>
      <section className='flex flex-col lg:flex-row'>
        <aside className='mr-6 w-full lg:w-1/3'>
          <Image
            src={CONFIG.image}
            width={400}
            height={500}
            alt={CONFIG.title}
          />
        </aside>
        <article className='w-full lg:w-2/3'>
          <h2 className='ABOUT_ME-2xl font-bold'>{CONFIG.subtitle}</h2>
          <p className='my-4'>{ABOUT_ME.age}</p>
          <div>
            {CONTACTS.map((c) => (
              <div key={c.title} className='my-4 flex items-center'>
                <div className='bg-white mr-3 rounded-md'>
                  <Image alt={c.title} src={c.icon} width={36} height={36} />
                </div>
                <a href={c.link} className='ABOUT_ME-indigo-700 dark:ABOUT_ME-indigo-200'>{c.value}</a>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className='my-6 flex flex-col lg:flex-row'>
        <aside className='mr-6 w-full lg:w-1/3'>
          <article>
            <h2 className='ABOUT_ME-2xl font-bold my-4'>{ABOUT_ME.aboutMe.title}</h2>
            {ABOUT_ME.aboutMe.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <article className='my-6' >
            <h2 className='ABOUT_ME-2xl font-bold'>{ABOUT_ME.skills}</h2>
            <ul className='list-disc list-inside my-4'>
            {SKILLS.map(s => (
              <li key={s}>{s}</li>
            ))}          
            </ul>
          </article>
        </aside>
        <section className='w-full lg:w-2/3'>
          <article>
            <h2 className='ABOUT_ME-2xl font-bold'>{ABOUT_ME.experience}</h2>
            {EXPERIENCE.map(item => (
              <article key={`${item.title}-${item.dateFrom}-${item.dateTo}`} className='my-4'>
                <h3 className='ABOUT_ME-2xl'>{item.title}</h3>
                <p className='ABOUT_ME-lg'>{item.dateFrom} - {item.dateTo} {item.company}</p>
                {item.responsibilities.map(resp => (
                  <div key={resp.description} className='my-2'>
                    <p className='my-1' dangerouslySetInnerHTML={{ __html: resp.description}}></p>
                    <ul className='list-disc list-inside'>
                      {resp.items.map(i=>(
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                    {resp.link && (
                      <a href={resp.link} className='ABOUT_ME-indigo-700 dark:ABOUT_ME-indigo-200'>{ABOUT_ME.behanceProject}</a>
                    )}
                  </div>
                ))}
              </article>
            ))}
          </article>
          <article>
            <h2 className='ABOUT_ME-2xl font-bold my-4'>{ABOUT_ME.education}</h2>
            <p className='ABOUT_ME-lg'>{EDUCATION.date}, {EDUCATION.spec}</p>
            <p className='ABOUT_ME-lg'>{EDUCATION.fac}</p>
            <p className='ABOUT_ME-lg'>{EDUCATION.university}</p>
          </article>
        </section>
      </section>
    </main>
  )
}

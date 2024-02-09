import { useRouter } from 'next/router'

const ICONS_FOR_TITLES = {
  JavaScript: (title) => (
    <span className='nav-item'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 8l-4 4l4 4' />
        <path d='M17 8l4 4l-4 4' />
        <path d='M14 4l-4 16' />
      </svg>{' '}
      <span>{title}</span>
    </span>
  ),
  Next: (title) => (
    <span className='nav-item'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993' />
        <path d='M15 12v-3' />
      </svg>{' '}
      <span>{title}</span>
    </span>
  ),
  CSS: (title) => (
    <span className='nav-item'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
        <path d='M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4' />
        <path d='M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0' />
        <path d='M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75' />
        <path d='M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75' />
      </svg>

      <span>{title}</span>
    </span>
  ),
  Salesforce: (title) => (
    <span className='nav-item'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 64 64'
        fill='currentColor'
      >
        <path
          d='M27.9,18.6c1.6-1.6,3.8-2.7,6.2-2.7c3.2,0,6.1,1.8,7.6,4.5c1.3-0.6,2.8-0.9,4.3-0.9c5.8,0,10.6,4.8,10.6,10.7
        s-4.7,10.7-10.6,10.7c-0.7,0-1.4-0.1-2.1-0.2c-1.3,2.4-3.8,4-6.8,4c-1.2,0-2.4-0.3-3.4-0.8c-1.3,3.1-4.5,5.4-8.1,5.4
        c-3.8,0-7-2.4-8.3-5.8c-0.6,0.1-1.1,0.2-1.7,0.2c-4.5,0-8.2-3.7-8.2-8.3c0-2.9,1.6-5.7,4.1-7.2c-0.5-1.2-0.8-2.4-0.8-3.8
        c0-5.2,4.3-9.5,9.5-9.5C23.3,14.8,26.1,16.2,27.9,18.6'
        />
      </svg>

      <span>{title}</span>
    </span>
  ),
  Powershell: (title) => (
    <span className='nav-item'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4.887 20h11.868c.893 0 1.664 -.665 1.847 -1.592l2.358 -12c.212 -1.081 -.442 -2.14 -1.462 -2.366a1.784 1.784 0 0 0 -.385 -.042h-11.868c-.893 0 -1.664 .665 -1.847 1.592l-2.358 12c-.212 1.081 .442 2.14 1.462 2.366c.127 .028 .256 .042 .385 .042z' />
        <path d='M9 8l4 4l-6 4' />
        <path d='M12 16h3' />
      </svg>

      <span>{title}</span>
    </span>
  ),
}

export default {
  logo: <span className='font-semibold'>📝 Lukes Snippets</span>,
  docsRepositoryBase: 'https://github.com/lukethacoder/snippets/tree/main/docs',
  project: {
    link: 'https://github.com/lukethacoder/snippets',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Lukes Snippets',
      }
    }
  },
  faviconGlyph: '📝',
  primaryHue: 34,
  primarySaturation: 50,
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (Object.hasOwn(ICONS_FOR_TITLES, title)) {
        return ICONS_FOR_TITLES[title](title)
      }
      return <>{title}</>
    },
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href='https://lukesecomb.digital' target='_blank'>
          Luke Secomb
        </a>
        .
      </span>
    ),
  },
}

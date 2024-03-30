import Link from 'next/link'
import clsx from 'clsx'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean // Optional property
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label='Breadcrumb' className='mb-6 block'>
      <ol className={clsx('flex text-xl md:text-xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? 'page' : undefined}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500'
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className='mx-3 inline-block'>/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

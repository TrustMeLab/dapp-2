import { CheckCircle } from 'heroicons-react/build'

export function ToastStep({
  status,
  title,
  children,
}: {
  status: string
  title: string
  children: (() => JSX.Element) | null
}) {
  return (
    <li>
      {status === 'complete' ? (
        <div className="group">
          <span className="flex flex-wrap items-start">
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <CheckCircle className="h-full w-full text-indigo-600 group-hover:text-indigo-800" />
            </span>
            <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
              {title}
            </span>
          </span>
          <>{children && children()}</>
        </div>
      ) : status === 'current' ? (
        <div className="flex flex-wrap items-start">
          <span className="relative flex h-5 w-5 shrink-0 items-center justify-center ">
            <span className="absolute h-4 w-4 animate-ping rounded-full bg-indigo-200" />
            <span className="relative block h-2 w-2 rounded-full bg-indigo-600" />
          </span>
          <span className="ml-3 text-sm font-medium text-indigo-600">{title}</span>
          <>{children && children()}</>
        </div>
      ) : (
        <div className="group">
          <div className="flex flex-wrap items-start">
            <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
            </div>
            <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
              {title}
            </p>
          </div>
          <>{children && children()}</>
        </div>
      )}
    </li>
  )
}

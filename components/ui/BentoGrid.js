'use client'

import { cn } from '@/lib/utils'
import { CheckIcon, ShieldIcon, StarIcon, ClockIcon, DollarSignIcon, AwardIcon } from './Icons'

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-lg bg-white border border-gray-200 hover:border-[#82caff]/30 justify-between flex flex-col space-y-4 overflow-hidden',
        className
      )}
    >
      {header}
      <div className="p-6 group-hover/bento:translate-x-1 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-gray-900 mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-gray-700 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}

// Icon components mapping
export const FeatureIcon = ({ type, className }) => {
  const iconMap = {
    check: CheckIcon,
    shield: ShieldIcon,
    star: StarIcon,
    clock: ClockIcon,
    dollar: DollarSignIcon,
    award: AwardIcon,
  }

  const IconComponent = iconMap[type] || CheckIcon

  return (
    <div className={cn('w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center', className)}>
      <IconComponent className="w-5 h-5 text-primary-500" />
    </div>
  )
}

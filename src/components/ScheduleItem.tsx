interface ScheduleItemProps {
  time: string
  title: string
  memeEmoji?: string
  memeText?: string
  memeSubtext?: string
  isLast?: boolean
}

export function ScheduleItem({
  time,
  title,
  memeEmoji = '🎉',
  memeText,
  memeSubtext,
  isLast = false
}: ScheduleItemProps) {
  return (
    <div
      className={`relative flex items-start gap-6 pb-8 ${!isLast ? 'border-l-4 border-accent ml-4 pl-8' : 'ml-4 pl-8'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-accent rounded-full border-4 border-base flex items-center justify-center shadow-lg">
        <span className="text-xs">{memeEmoji}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-baseline gap-4">
          <span className="text-2xl font-bold text-accent font-['Nunito']">
            {time}
          </span>
          <h3 className="text-xl text-deep font-semibold">
            {title}
          </h3>
        </div>

        {/* Meme text - always visible */}
        {memeText && (
          <div className="mt-3 bg-sunny/20 border-2 border-sunny rounded-lg p-3">
            <p className="text-sm font-semibold text-deep">{memeText}</p>
            {memeSubtext && (
              <p className="text-xs text-gray-600 mt-1 italic">{memeSubtext}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

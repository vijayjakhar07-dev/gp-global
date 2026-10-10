import { useState } from 'react'

const FALLBACK_SRC = '/images/vetted/highway.jpg'

export default function CoverImage({ src, alt, className = '', fallback = FALLBACK_SRC, ...rest }) {
  const [failedSrc, setFailedSrc] = useState(null)
  const current = !src || failedSrc === src ? fallback : src

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (src && failedSrc !== src) setFailedSrc(src)
      }}
      {...rest}
    />
  )
}

export { FALLBACK_SRC }

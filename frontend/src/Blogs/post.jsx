import React from 'react'

 export default function post(title, date, description) {
  return (
    <div>
<h1>
    {title}
</h1>
<p>
    {date}
</p>
<p>
    {description}
</p>
    </div>
  )
}


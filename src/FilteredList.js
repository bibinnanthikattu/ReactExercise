import React, { useMemo } from 'react'

export default function FilteredList({ list }) {
    // console.log(list);
    const filteredList = useMemo(() => list.filter((items) => items.age > 18).map((item) => {
        return (
            <div>
                <p key={item.id}>{item.name} : {item.age}</p>               
            </div>
        )
    }),[])
    console.log(filteredList);
  return (
      <div>
          {filteredList}
    </div>
  )
}

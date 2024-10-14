import { ChangeEvent } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MySelect } from './UI/select/MySelect'

type Filter = {
  sort: string
  query: string
}

type PostFilterProps = {
  filter: Filter
  setFilter: (sortAndQuery: Filter) => void
}

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.currentTarget.value })}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={(valueSort) => setFilter({ ...filter, sort: valueSort })}
        defaultValue="Сортировка:"
        options={[
          {
            value: 'title',
            name: 'По названию',
          },
          {
            value: 'body',
            name: 'По описанию',
          },
        ]}
      />
    </div>
  )
}

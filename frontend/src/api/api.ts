import axios from 'axios'
import { Sort } from 'types/types'

export const getWorkflows = async ({ sort }: { sort: Sort }) => {
  const response = await axios({
    method: 'get',
    url: `/workflows?_sort=id&_order=${sort}`,
  })
  return response.data
}

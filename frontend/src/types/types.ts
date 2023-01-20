export type Workflow = {
  id: number
  project_id: number
  created_at: string
  created_by_user: number
  status: 'success' | 'failure'
  duration_secconds: number
}

export enum STATUS {
  'success' = 'Success',
  'failure' = 'Failed',
}

export type Sort = 'asc' | 'desc'

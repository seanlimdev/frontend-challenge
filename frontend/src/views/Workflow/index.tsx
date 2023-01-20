import { useCallback, useEffect, useState } from 'react'

import { CalendarOutlined, ClockCircleOutlined, LeftOutlined, LoadingOutlined, RightOutlined } from '@ant-design/icons'
import { Badge, Button, Col, Empty, Row, Space } from 'antd'
import { getWorkflows } from 'api/api'
import Filter from 'components/Filter'
import { format, formatDuration, intervalToDuration } from 'date-fns'
import { useMediaQuery } from 'react-responsive'
import { Sort, STATUS, Workflow } from 'types/types'

import {
  Container,
  DateText,
  Header,
  HeaderText,
  Title,
  WorkflowContainer,
  WorkflowItem,
  WorkflowItemTitle,
  WorkflowListHeader,
} from './style'

const WorkflowView = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(false)

  // Sort
  const [sort, setSort] = useState<Sort>('asc')

  const handlePagination = (dir: 'prev' | 'next') => {
    // Handle pagination
    console.log(dir)
  }

  const fetchWorkflows = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getWorkflows({ sort })
      setWorkflows(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [sort])

  useEffect(() => {
    fetchWorkflows()
  }, [fetchWorkflows])

  const getFormattedDate = (date: string) => {
    return format(new Date(date), 'MMMM dd, yyyy hh:mm a')
  }

  const getFormattedDuration = (seconds: number) => {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 })
    return formatDuration(duration)
  }

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <Container>
      <Row>
        <Col xs={7} sm={5}>
          <Filter sort={sort} setSort={setSort} />
        </Col>
        <Col xs={17} sm={19}>
          <WorkflowContainer>
            <Header>
              <Title>All Workflows</Title>
              <Space>
                <Button type='text' style={{ color: 'rgb(135, 135, 135)' }} onClick={() => handlePagination('prev')}>
                  <LeftOutlined />
                  Previous
                </Button>
                <Button type='text' style={{ color: 'rgb(135, 135, 135)' }} onClick={() => handlePagination('next')}>
                  Next <RightOutlined />
                </Button>
              </Space>
            </Header>
            <WorkflowListHeader>
              {!isMobile ? (
                <>
                  <HeaderText>Name</HeaderText>
                  <HeaderText>Created</HeaderText>
                </>
              ) : null}
            </WorkflowListHeader>
            {loading ? (
              <LoadingOutlined
                style={{
                  width: '100%',
                  fontSize: '3em',
                  marginTop: '100px',
                  textAlign: 'center',
                  position: 'absolute',
                  left: '47px',
                }}
              />
            ) : workflows.length > 0 ? (
              workflows.map((w) => (
                <WorkflowItem key={w.id}>
                  {isMobile ? <RightOutlined style={{ position: 'absolute', right: '1rem', top: '50%' }} /> : null}
                  <Space>
                    <WorkflowItemTitle>Workflow {w.id}</WorkflowItemTitle>
                    <Badge
                      count={STATUS[w.status]}
                      style={{
                        backgroundColor: w.status === 'success' ? 'rgb(0, 173, 19)' : 'rgb(226, 55, 28)',
                        boxShadow: 'none',
                        fontWeight: 'bold',
                      }}
                    />
                  </Space>
                  <Space>
                    <Space direction='vertical'>
                      <Space>
                        <CalendarOutlined />
                        <DateText>{getFormattedDate(w.created_at)}</DateText>
                      </Space>
                      <Space>
                        <ClockCircleOutlined />
                        <DateText>{getFormattedDuration(w.duration_secconds)}</DateText>
                      </Space>
                    </Space>
                    {!isMobile ? <RightOutlined /> : null}
                  </Space>
                </WorkflowItem>
              ))
            ) : (
              <Empty />
            )}
          </WorkflowContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default WorkflowView

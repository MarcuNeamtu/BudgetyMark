import React from 'react'
import Card from '../Card'
import PlusOutlined from '../../assets/PlusOutlined'
import TransactionsPlaceholder from '../TransactionsPlaceholder'
import useModal from '../../hooks/useModal'
import UpdateTransaction from '../UpdateTransaction'

const LatestTransactions: React.FC = () => {
  const [Modal, showModal] = useModal(UpdateTransaction)

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Latest transactions</span>
          <PlusOutlined
            onClick={() => {
              showModal({})
            }}
            width={15}
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
          />
        </div>
      }
    >
      <TransactionsPlaceholder />

      {Modal}
    </Card>
  )
}

export default LatestTransactions
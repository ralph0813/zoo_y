import * as React from 'react'
import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/outline'


export default function ActionBar() {

  const [approved, setApproved] = useState(false)

  const handleApprove = () => {

  }

  const handleReject = () => {

  }

  return (
    <div className="w-full flex items-end space-x-2">
      <div>
        <CheckIcon className='h-6 w-6 text-brand' />
      </div>
      <div>
        <button
          className="btn-primary"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          className="btn-secondary"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>

    </div>
  )
}

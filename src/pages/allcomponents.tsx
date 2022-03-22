import Button from 'common/ui/button'
import React from 'react'

const components = () => {
    return (
        <div className="mt-5">
            <Button>Button 1</Button>
            <Button border="border" padding="p-1">
                Button 1
            </Button>
            <Button className="border bg-blue-500">Button 1</Button>
            <Button border="border-4" shadow="shadow-lg">
                Button 1
            </Button>
        </div>
    )
}

export default components

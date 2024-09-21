import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'

// The id is the key. We are talking about the id in the url.

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const page = async ({searchParams}: PageProps) => {

    const {id} = searchParams

    if (!id || typeof id !== "string"){
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: { id },
    })

    if (!configuration){
        return notFound()
    }

  return (
    <DesignPreview />
  )
}

export default page
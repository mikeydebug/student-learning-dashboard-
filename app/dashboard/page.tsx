import { Suspense } from 'react'
import { BentoGrid } from '@/components/layout/BentoGrid'
import { HeroTile } from '@/components/tiles/HeroTile'
import { CourseTile } from '@/components/tiles/CourseTile'
import { ActivityTile } from '@/components/tiles/ActivityTile'
import { createClient } from '@/lib/supabase/server'
import LoadingSkeleton from './loading'

export default async function DashboardPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <DashboardContent />
    </Suspense>
  )
}

async function DashboardContent() {
  const supabase = await createClient()

  // Fetch courses ordered by creation date
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Supabase fetch error:', error)
    throw new Error(`Failed to fetch dashboard data: ${error.message}`)
  }

  const mockUser = {
    name: 'Alex',
    streak: 14
  }

  return (
    <BentoGrid>
      <HeroTile name={mockUser.name} streak={mockUser.streak} index={0} />
      
      {courses?.map((course, i) => (
        <div key={course.id} style={{ gridArea: `course${i + 1}` }}>
          <CourseTile course={course} index={i + 1} />
        </div>
      ))}
      
      <ActivityTile index={(courses?.length || 0) + 1} />
    </BentoGrid>
  )
}

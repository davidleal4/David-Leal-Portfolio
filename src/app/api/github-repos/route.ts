import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('https://api.github.com/users/davidleal4/repos?sort=updated&per_page=20', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'David-Leal-Portfolio'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos = await response.json()
    
    // Filter out forked repositories and private repos, sort by stars
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork && !repo.private)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)

    return NextResponse.json(filteredRepos)
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}
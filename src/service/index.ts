interface PostData {
  name: string
  title: string
  content: string
}

export async function sendData(data: PostData): Promise<boolean> {
  const url =
    'https://script.google.com/macros/s/AKfycbygKcnkE-2QGg-GxCLtzu86IKnZtim1bslFv_6Tbl3j9NtlJr0-dOK_yCiBGgVDA73o1Q/exec'

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    const result: { success: boolean; error?: string } = await response.json()

    if (!result.success) {
      console.error('Error from server:', result.error)
    }

    return result.success
  } catch (error) {
    console.error('Network error:', error)
    return false
  }
}

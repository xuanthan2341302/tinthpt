import { useState } from 'react'

export default function App() {
  const [role, setRole] = useState<'teacher' | 'student' | null>(null)

  return (
    <main className="page">
      <header className="topbar">
        <div className="brand-mark">TL</div>
        <div>
          <div className="brand-name">TIN LAB</div>
          <div className="brand-subtitle">NỀN TẢNG HỌC TẬP VÀ THI TRỰC TUYẾN</div>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">TIN HỌC 12 · HỌC TẬP & KIỂM TRA</div>
        <h1>Khám phá tri thức.<br /><span>Chinh phục công nghệ.</span></h1>
        <p className="intro">
          Không gian học tập và luyện thi Tin học 12, nơi kiến thức được hệ thống
          hóa và tiến bộ được theo dõi rõ ràng.
        </p>

        <div className="role-grid">
          <button className="role-card teacher" onClick={() => setRole('teacher')}>
            <span className="role-icon">▤</span>
            <span className="role-title">Giáo viên</span>
            <span className="role-desc">Quản lý học liệu, ngân hàng câu hỏi và kỳ thi</span>
            <span className="role-action">Truy cập khu vực giáo viên →</span>
          </button>
          <button className="role-card student" onClick={() => setRole('student')}>
            <span className="role-icon">⌘</span>
            <span className="role-title">Học sinh</span>
            <span className="role-desc">Luyện tập, tham gia kỳ thi và xem kết quả</span>
            <span className="role-action">Vào khu vực học sinh →</span>
          </button>
        </div>
        {role && (
          <div className="notice" role="status">
            Bạn đã chọn {role === 'teacher' ? 'Giáo viên' : 'Học sinh'}.
            Chức năng đăng nhập và dự thi sẽ được triển khai ở bước tiếp theo.
            <button onClick={() => setRole(null)}>Đóng</button>
          </div>
        )}
      </section>

      <footer>© 2026 TIN LAB · Nền tảng hỗ trợ dạy và học Tin học</footer>
    </main>
  )
}

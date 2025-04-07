import { useState} from 'react';
import DonutChart from './DonutChart';
import BarChart from './BarChart';

export default function StatisticsSection() {
  const [statistics, setStatistics] = useState({
    students: 1428,
    organizations: 1428,
    activeUsers: 856,
    completionRate: 72
  });

  const [chartSettings, setChartSettings] = useState({
    barChartX: 'Day',
    barChartY: 'Engagement Score',
    donut1Data: [
      { name: 'Python', value: 30, color: '#10b981' },
      { name: 'JavaScript', value: 25, color: '#f87171' },
      { name: 'Java', value: 20, color: '#60a5fa' },
      { name: 'C++', value: 15, color: '#f59e0b' },
      { name: 'C#', value: 7, color: '#8b5cf6' },
      { name: 'Ruby', value: 3, color: '#ec4899' }
    ],
    donut2Data: [
      { name: 'Pass', value: 72, color: '#10b981' },
      { name: 'Fail', value: 28, color: '#f87171' }
    ],
    barChartData: [
      { day: 'Mon', value: 3.0 },
      { day: 'Tue', value: 2.0 },
      { day: 'Wed', value: 4.0 },
      { day: 'Thu', value: 2.0 },
      { day: 'Fri', value: 5.0 }
    ]
  });

  // Handler for X-axis change
  const handleXAxisChange = (e) => {
    setChartSettings({
      ...chartSettings,
      barChartX: e.target.value
    });
  };

  // Handler for Y-axis change
  const handleYAxisChange = (e) => {
    setChartSettings({
      ...chartSettings,
      barChartY: e.target.value
    });
  };

  return (
    <div className="statistics-section">
      <div className="header">
        <h1>Dashboard Overview</h1>
        <div className="header-actions">
          <div className="date-filter">
            Last 30 days ▼
          </div>
          <button className="action-button">Export Report</button>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>NO of Students</h3>
          <p className="value">{statistics.students}</p>
        </div>
        <div className="stat-card">
          <h3>NO of Organizations</h3>
          <p className="value">{statistics.organizations}</p>
        </div>
      </div>
      
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Student Distribution by Language</h3>
            <div className="chart-legend">
              {chartSettings.donut1Data.map((item) => (
                <div key={item.name} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <DonutChart 
            data={chartSettings.donut1Data} 
            width={250} 
            height={250} 
            centerLabel="Students"
            showTooltip={true}
          />
        </div>
        
        <div className="chart-card">
          <div className="chart-header">
            <h3>Activity by {chartSettings.barChartX}</h3>
            <div className="axis-controls">
              <div className="control-group">
                <label>X:</label>
                <select value={chartSettings.barChartX} onChange={handleXAxisChange}>
                  <option value="Day">Day</option>
                  <option value="Week">Week</option>
                  <option value="Month">Month</option>
                </select>
              </div>
              <div className="control-group">
                <label>Y:</label>
                <select value={chartSettings.barChartY} onChange={handleYAxisChange}>
                  <option value="Engagement Score">Engagement Score</option>
                  <option value="Logins">Logins</option>
                  <option value="Submissions">Submissions</option>
                </select>
              </div>
            </div>
          </div>
          
          <BarChart 
            data={chartSettings.barChartData}
            width={400}
            height={300}
            xLabel={chartSettings.barChartX}
            yLabel={chartSettings.barChartY}
          />
        </div>
        
        <div className="chart-card">
          <div className="chart-header">
            <h3>Overall Pass Percentage</h3>
            <div className="chart-legend">
              {chartSettings.donut2Data.map((item) => (
                <div key={item.name} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <DonutChart 
            data={chartSettings.donut2Data} 
            width={250} 
            height={250} 
            centerLabel="Pass Rate"
            centerValue={`${chartSettings.donut2Data[0].value}%`}
            showTooltip={true}
          />
        </div>
        
        <div className="chart-card">
          <div className="chart-header">
            <h3>Recent Activity</h3>
            <a href="#" className="view-all">View All</a>
          </div>
          
          <div className="activity-log">
            <div className="activity-item">
              <div>
                <div className="activity-title">New organization added</div>
                <div className="activity-desc">TechEd Solutions</div>
              </div>
              <div className="activity-time">10 min ago</div>
            </div>
            
            <div className="activity-item">
              <div>
                <div className="activity-title">Student batch import</div>
                <div className="activity-desc">128 new students added</div>
              </div>
              <div className="activity-time">2 hours ago</div>
            </div>
            
            <div className="activity-item">
              <div>
                <div className="activity-title">System update completed</div>
                <div className="activity-desc">Version 2.4.0 deployed</div>
              </div>
              <div className="activity-time">Yesterday</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .statistics-section {
          width: 100%;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .date-filter {
          padding: 8px 16px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        
        .action-button {
          padding: 8px 16px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .stat-card {
          background-color: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        
        .stat-card h3 {
          margin: 0 0 8px;
          font-size: 16px;
          color: #64748b;
          font-weight: 500;
        }
        
        .stat-card .value {
          font-size: 32px;
          font-weight: 600;
          margin: 0;
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .chart-card {
          background-color: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .chart-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
        }
        
        .chart-legend {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          font-size: 13px;
        }
        
        .legend-color {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 6px;
        }
        
        .axis-controls {
          display: flex;
          gap: 16px;
        }
        
        .control-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .control-group select {
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }
        
        .view-all {
          font-size: 13px;
          color: #3b82f6;
          text-decoration: none;
        }
        
        .activity-log {
          display: flex;
          flex-direction: column;
        }
        
        .activity-item {
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
        }
        
        .activity-item:last-child {
          border-bottom: none;
        }
        
        .activity-title {
          font-weight: 500;
        }
        
        .activity-desc {
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
        }
        
        .activity-time {
          font-size: 13px;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}

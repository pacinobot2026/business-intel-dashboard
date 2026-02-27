// Projects API
// Reads from KANBAN.md in the workspace

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const workspacePath = process.env.WORKSPACE_PATH || 'C:\\Users\\Administrator\\.openclaw\\workspace';
    const kanbanPath = path.join(workspacePath, 'KANBAN.md');

    let active = [];
    let teamTasks = [];

    if (fs.existsSync(kanbanPath)) {
      const content = fs.readFileSync(kanbanPath, 'utf-8');
      
      // Parse KANBAN.md for backlog and in-progress items
      const backlogMatch = content.match(/## 🔴 Backlog([\s\S]*?)## 🟡 In Progress/);
      const inProgressMatch = content.match(/## 🟡 In Progress([\s\S]*?)## 🟢 Done/);

      if (backlogMatch) {
        const backlogText = backlogMatch[1];
        const tasks = backlogText.match(/- \[ \] (.+?) \| priority: (\w+)/g) || [];
        
        teamTasks = tasks.map(task => {
          const match = task.match(/- \[ \] (.+?) \| priority: (\w+)/);
          return {
            task: match[1],
            priority: match[2]
          };
        });
      }

      if (inProgressMatch) {
        const inProgressText = inProgressMatch[1];
        const items = inProgressText.match(/- \[ \] (.+?) \|/g) || [];
        
        active = items.map(item => {
          const match = item.match(/- \[ \] (.+?) \|/);
          return {
            name: match[1],
            status: 'in-progress',
            description: 'Active development'
          };
        });
      }
    }

    // Add recent builds from memory
    const recentBuilds = [
      {
        name: 'ReviewRush',
        status: 'done',
        description: 'Local business review getter - $47 product, all stages complete'
      },
      {
        name: 'AI Client Attraction Suite',
        status: 'done',
        description: 'AI coaching product for Karthik - $997, all 6 stages complete'
      },
      {
        name: 'Telegram Voice Conversation',
        status: 'done',
        description: '2-way voice conversation system via Telegram'
      }
    ];

    res.status(200).json({
      active,
      teamTasks,
      recent: recentBuilds
    });
  } catch (error) {
    console.error('Projects API error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}

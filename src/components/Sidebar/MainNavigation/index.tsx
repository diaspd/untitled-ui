import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} isActive />
      <NavItem title="Dashboard" icon={BarChart} isActive={false} />
      <NavItem title="Projects" icon={SquareStack} isActive={false} />
      <NavItem title="Tasks" icon={CheckSquare} isActive={false} />
      <NavItem title="Reporting" icon={Flag} isActive={false} />
      <NavItem title="Users" icon={Users} isActive={false} />
    </nav>
  )
}


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMooveClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Moove is currently under development. Stay tuned for updates!",
      duration: 3000,
    });
  };

  const projectLinks = [
    {
      name: "Project 1",
      url: "https://lovable.dev/projects/e2de899b-cf82-4184-a58b-35fc2cd4ef2e",
      buttonLabel: "Quickscan",
      buttonUrl: "https://preview--quick-scan-stock-control.lovable.app/auth",
      isExternal: true
    },
    {
      name: "Project 2", 
      url: "https://lovable.dev/projects/e2de899b-cf82-4184-a58b-35fc2cd4ef2e",
      buttonLabel: "Moove",
      buttonUrl: null,
      isExternal: false
    }
  ];

  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">MoveEasy</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">
              Community
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/registry" className="text-foreground hover:text-primary transition-colors">
              Registry
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      {projectLinks.map((project, index) => (
                        <li key={index} className="row-span-1">
                          <div className="block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none mb-2">{project.name}</div>
                            <div className="flex gap-2">
                              <NavigationMenuLink asChild>
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  View Project
                                </a>
                              </NavigationMenuLink>
                              {project.buttonUrl ? (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  asChild
                                  className="h-6 px-2 text-xs"
                                >
                                  <a
                                    href={project.buttonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {project.buttonLabel}
                                  </a>
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={handleMooveClick}
                                  className="h-6 px-2 text-xs"
                                >
                                  {project.buttonLabel}
                                </Button>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/resources" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/community" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/registry" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Registry
            </Link>
            
            {/* Projects Links in Mobile Menu */}
            <div className="border-t pt-4 mt-2">
              <h3 className="font-medium mb-2">Projects:</h3>
              {projectLinks.map((project, index) => (
                <div key={index} className="py-2 space-y-2">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block text-foreground hover:text-primary transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {project.name}
                  </a>
                  <div className="ml-4">
                    {project.buttonUrl ? (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="h-7 px-3 text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <a
                          href={project.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.buttonLabel}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          handleMooveClick();
                          setIsMenuOpen(false);
                        }}
                        className="h-7 px-3 text-xs"
                      >
                        {project.buttonLabel}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

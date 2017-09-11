# interface-tp
TP Interface Savable :
Faire une classe de sauvegarde Saver qui utilise une interface Savable dans ses méthodes

# 1) Créer l'interface Savable qui définit une méthode getInfos():string

# 2) Créer la classe Saver qui aura :
a. Un tableau de string private saves
b. Une méthode save qui attend en argument quelque chose de type Savable
(la méthode save utilise le getInfos() de son argument et le stock à l'intérieur du tableau this.saves)

# 3) Implémenter l'interface Savable sur le Chat et le Chien
(Le but de la méthode getInfos() de cette interface sera donc de renvoyer sous forme de string les informations du chien/chat que l'on voudra sauvegarder)
